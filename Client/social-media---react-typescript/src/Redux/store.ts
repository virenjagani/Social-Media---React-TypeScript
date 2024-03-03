import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Reducers/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = {
  auth: AuthSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
