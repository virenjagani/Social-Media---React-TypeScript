export type MAKE_LOADING_AUTH_type = "MAKE_LOADING_AUTH";
export type SET_ERROR_AUTH_type = "SET_ERROR_AUTH";
export type SET_REGISTER_AUTH_type = "SET_REGISTER_AUTH";
export type GET_REGISTER_AUTH_type = "GET_REGISTER_AUTH";

export interface Data {
  _id: string;
  firstName: string;
  lastNamr: string;
  email: string;
  password: string;
  phoneNumber: string;
  city: string;
  accessToken?: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}

export type Loading = boolean;
export type Status = "success" | "error" | "pendding";
export type Message = string | null | '';

export type Errortype = Error | null ;

export interface InitialState {
  loading: Loading;
  error: Errortype;
  message: Message;
  data:
    | {
        status: Status;
        message: Message;
        data: Data;
      }
    | [];
}

export interface MakeLoading {
  type: typeof MAKE_LOADING_AUTH_type;
  payload: Loading;
}
export interface SetErrorAuth {
  type: typeof SET_ERROR_AUTH_type;
  payload: Errortype;
}
export interface SetRegisterAuth {
  type: typeof SET_REGISTER_AUTH_type;
  payload: InitialState;
}

export type AuthActionType = MakeLoading | SetErrorAuth | SetRegisterAuth;
