import { all, fork, takeLatest } from "redux-saga/effects";
import { GET_LOGIN_AUTH, GET_SIGNUP_AUTH } from "../Reducers/Slices/authAction";
import { fetchLoginAuth, fetchSighupAuth } from "./Handlers/authHandlers";



function* auth(){
    yield takeLatest(GET_SIGNUP_AUTH,fetchSighupAuth)
    yield takeLatest(GET_LOGIN_AUTH,fetchLoginAuth)
}

const authSaga = [fork(auth)]

export function* watcherSaga(){
    yield all([...authSaga])
}