import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Auth {
  firstName: string;
  lastName: string;
}

export interface AuthState {
  loading: boolean;
  error: any;
  data: Auth[];
}

const initialState: AuthState = {
  loading: false,
  error: null,
  data: [],
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loading: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      }
    //   error: (state, action) => {
    //     return {
    //       ...state,
    //     };
    //   };
    },
  },
});

export default AuthSlice.reducer;
export const { loading } = AuthSlice.actions;
