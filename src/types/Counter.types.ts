export interface ICountState {
  count: number;
}

export enum CounterActionsList {
  UPDATE_COUNT_ACTION = "UPDATE COUNT ACTION",
}

export interface IChangeLanguage {
  ru: string
  eng: string
}