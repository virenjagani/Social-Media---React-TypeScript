import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
import rootSaga from './Sagas/rootSaga';
import { authReducer } from './Reduser/AuthReducer/authReducer';


const sagaMiddleware = createSagaMiddleware()

const middleware = [logger,sagaMiddleware];

// const persistConfig = {
//     key:'root',
//     storage,
//     // blacklist:['REDUCER_NAME']
// }

const rootReducer = combineReducers({
    auth: authReducer
})

// const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(...middleware )
})

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;