// import { Store, configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";
// import storage from "redux-persist/lib/storage";
// import { Persistor, persistReducer, persistStore } from "redux-persist";
// import rootSaga from "./Client/social-media---react-typescript/src/Redux/Sagas/rootSaga";
// import rootReducer, {
//   RootState,
// } from "./Client/social-media---react-typescript/src/Redux/Reduser/rootReducer";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [logger, sagaMiddleware];

// const persistConfig = {
//   key: "root",
//   storage,
//   // blacklist:['REDUCER_NAME']
// };

// const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

// export const store: Store<RootState> = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(...middleware),
// });

// sagaMiddleware.run(rootSaga);

// export const persistor: Persistor = persistStore(store);
// export const AppDispatch: () => typeof store.dispatch = useDispatch;
// export const AppSelector: TypedUseSelectorHook<
//   ReturnType<typeof store.getState>
// > = useSelector;
