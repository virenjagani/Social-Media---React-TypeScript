import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Auth {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  city?: string;
  province?: string;
  accessToken: string | null;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface AuthState {
  loading: boolean;
  error: any;
  message: null | string | void;
  accessToken: null | string;
  data: Auth | [];
}

const initialState: AuthState = {
  loading: false,
  error: null,
  message: null,
  accessToken: null,
  data: [],
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    authLoading(state) {
      state.loading = true;
      state.error = null;
    },
    authError(state, action: PayloadAction<Error | any>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSignupAuth(state, action: PayloadAction) {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    setLoginAuth(
      state,
      action: {
        type: any;
        payload: { message: string | null; accessToken: null | string };
      }
    ) {
      state.loading = false;
      state.error = null;
      state.message = action.payload.message;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export default AuthSlice.reducer;
export const { authLoading, authError, setSignupAuth, setLoginAuth } =
  AuthSlice.actions;
