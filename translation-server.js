const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const I18N_ERROR_FILE = path.join(__dirname, 'i18n.error.json');
const SERVER_PORT = 12345;

const JSON_FILE = {};
const saveFileData = () => {
  fs.writeFileSync(I18N_ERROR_FILE, JSON.stringify(JSON_FILE, null, 2), { encoding: 'utf-8', flag: 'w' });
};

const addMissingTranslation = (ns, key) => {
  JSON_FILE[ns] = {
    ...(JSON_FILE[ns] || {}),
    [key]: key,
  };
  saveFileData();
};

// Create Express app
const app = express();
try {
  fs.unlinkSync(I18N_ERROR_FILE);
} catch (e) {
  //file does not exist
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// A sample route
app.put('/missing/:ns', (req, res, next) => {
  const namespace = req.params.ns;
  const key = req.query.key;

  if (!key) {
    res.status(400).send('Required query "key" params missing');
    return;
  }

  addMissingTranslation(namespace, key);

  res.send(`Added missing translation ns "${namespace}" key "${key}"`);
});

// Start the Express server
app.listen(SERVER_PORT, () => console.log(`Translation helper service is running ${SERVER_PORT}`));
