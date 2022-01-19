import {
  DefaultNamespace,
  Trans,
  TransProps as I18nTransProps,
} from "react-i18next"

export type TransProps = Omit<
  I18nTransProps<never, DefaultNamespace, HTMLDivElement>,
  "ns"
>

export const getNsTrans =
  (namespace: string) =>
  ({ children, ...props }: TransProps) =>
    (
      <Trans ns={namespace} {...props}>
        {children}
      </Trans>
    )
