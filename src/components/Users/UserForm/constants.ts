import { IOption } from "./types";

export const dataEndPoint = {
  first_name : "rain",
  second_name : "pain",
  age : 44,
  emailRequred : "rainpain@ya.ya",
  position : "BackEnd",
}

export enum requiredMessage {
  first_name = "Name is required field",
  second_name = "secondName is required field",
  age = "age is required field",
  emailRequred = "email is required field",
  emailMessage = "pls enter validate email",
  position = "Position is required",
  button = "submit button",
}

export const options: IOption[] = [
  {
    value: "FrontEnd",
    label: "FrontEnd",
  },
  {
    value: "BackEnd",
    label: "BackEnd",
  },
  {
    value: "Designer",
    label: "Designer",
  },
];

export const REGEX_EXCLUDE_SYMBOLS =
  /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*/;
