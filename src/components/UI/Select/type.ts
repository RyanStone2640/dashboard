export type SelectOption = {
  label: string
  value: string | number
}

export type SelectType = {
  name: string
  value: string
}
export interface OptionChange {
  (val: SelectOption | undefined, type: string): void
}
