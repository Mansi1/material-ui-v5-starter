const fs = require('fs');
const path = require('path');

const DEFAULT_LANGUAGE = 'en';

(async ()=> {
    let errorCode = 0;
    const i18nPath = path.join(__dirname, 'src','assets', 'i18n')
    const files = fs.readdirSync(i18nPath).filter((f) => f.endsWith('.json'));
    const defaultFile = files.find(f => f ===DEFAULT_LANGUAGE+'.json')

    if(!defaultFile){
        console.error('Missing default file')
        process.exit(1)
    }
    
    const otherTransNsMaps = files.filter(map => map !== defaultFile).map(file => ({
        lang: file.substring(0, file.lastIndexOf('.')),
        map: JSON.parse(fs.readFileSync(path.join(i18nPath,file)).toString())
    }))
    const defaultTransNsMap = JSON.parse(fs.readFileSync(path.join(i18nPath,defaultFile)).toString());
    Object.entries(defaultTransNsMap).forEach(([ns, keyValuePairs])=> {
       Object.entries(keyValuePairs).forEach(([key, value])=> {
           if(key !== value){
               console.error('Different key value pair in default language: (lang:'+DEFAULT_LANGUAGE+' ns:'+ns+' key:'+key+' value:'+value+')')
               errorCode = 1
           }
       })
    })
    Object.entries(defaultTransNsMap).forEach(([ns, keyValuePairs])=> {
        Object.entries(keyValuePairs).forEach(([key])=> {
            otherTransNsMaps.forEach(({ lang, map: nsMap }) => {
                const namespace = nsMap[ns];
                if (!namespace) {
                    console.error('Missing ns (lang:' + lang + ', ns:' + ns + ')');
                    errorCode = 1;
                    return;
                }
                if(!namespace[key]){
                    console.error('Missing key (lang:' + lang + ' ns:' + ns + ' key:"' + key + '")');
                }
            });
        })
    })
    // check for additional stuff
    otherTransNsMaps.forEach(({ lang, map: nsMap }) => {
      Object.entries(nsMap).forEach(([ns, keyValuePairs]) => {
        const defaultNS = defaultTransNsMap[ns];
        if (!defaultNS) {
          console.error('Additional ns (lang:' + lang + ', ns:' + ns + ')');
          errorCode = 1;
          return;
        }

        Object.keys(keyValuePairs).forEach((key) => {
          if (!defaultNS[key]) {
            console.error('Additional key (lang:' + lang + ' ns:' + ns + ' key:"' + key + '")');
            errorCode = 1;
          }
        });
      });
    });

    process.exit(errorCode)
})()