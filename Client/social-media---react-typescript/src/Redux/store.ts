import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Reducers/Slices/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware, { AnyAction } from "redux-saga";
import logger from "redux-logger";
import { watcherSaga } from "./Sagas/watcherSaga";
import storage from "redux-persist/lib/storage";
import { Persistor, persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
});

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);
// const persistedReducer = persistReducer<any, AnyAction>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});
sagaMiddleware.run(watcherSaga);

export const persistor: Persistor = persistStore(store);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
