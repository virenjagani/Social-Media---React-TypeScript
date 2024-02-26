import type {
  SetRegisterAuth,
  GET_REGISTER_AUTH_type,
  InitialState,
  SET_REGISTER_AUTH_type,
  AuthActionType,
  MAKE_LOADING_AUTH_type,
  SET_ERROR_AUTH_type,
  MakeLoading,
  Loading,
  Errortype,
  SetErrorAuth,
} from "./authReducer.d";

export const MAKE_LOADING_AUTH: MAKE_LOADING_AUTH_type = "MAKE_LOADING_AUTH";
export const SET_ERROR_AUTH: SET_ERROR_AUTH_type = "SET_ERROR_AUTH";
export const SET_REGISTER_AUTH: SET_REGISTER_AUTH_type = "SET_REGISTER_AUTH";
export const GET_REGISTER_AUTH: GET_REGISTER_AUTH_type = "GET_REGISTER_AUTH";

export const makeLoading = (payload: Loading): MakeLoading => ({
  type: MAKE_LOADING_AUTH,
  payload,
});

export const setErrorAuth = (payload: Errortype): SetErrorAuth => ({
  type: MAKE_LOADING_AUTH,
  payload,
});

export const setRegisterAuth = (payload: InitialState): SetRegisterAuth => ({
  type: SET_REGISTER_AUTH,
  payload,
});

const initialState: InitialState = {
  loading: false,
  error: null,
  message: null,
  data: [],
};

export const authReducer = (
  state: InitialState = initialState,
  { payload, type }: AuthActionType
) => {
  switch (type) {
    case MAKE_LOADING_AUTH:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR_AUTH:
      return {
        ...state,
        error: payload,
      };
    case SET_REGISTER_AUTH:
      if (typeof payload === "object" && payload !== null) {
        return {
          ...state,
          loading: false,
          error: null,
          message: payload.message,
        };
      } else {
        return state;
      }
    default:
      return {
        ...state,
      };
  }
};