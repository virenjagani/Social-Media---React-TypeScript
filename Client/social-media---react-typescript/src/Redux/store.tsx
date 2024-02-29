import { Store, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { Persistor, persistReducer, persistStore } from "redux-persist";
import rootSaga from "./Sagas/rootSaga";
import rootReducer, { RootState } from "./Reduser/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

const persistConfig = {
  key: "root",
  storage,
  // blacklist:['REDUCER_NAME']
};

const persistedReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer
);

const store: Store<RootState> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middleware),
});

sagaMiddleware.run(rootSaga);

export const persistor: Persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
