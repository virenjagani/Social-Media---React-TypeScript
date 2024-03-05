import { PutEffect, call, put } from "redux-saga/effects";
import { Actions } from "../../Reducers/Slices/authAction";
import { authError, authLoading, setLoginAuth, setSignupAuth} from "../../Reducers/Slices/authSlice";
import { requestLoginAuth, requestSignupAuth } from "../Requests/authRequests";
import { AxiosResponse } from "axios";

export function* fetchSighupAuth({payload}:Actions): Generator<PutEffect | void | any,void,any>{
    try {
        yield put(authLoading())
        const response: AxiosResponse<any,any> = yield call(requestSignupAuth,payload)
        console.log(response)
        response.status === 200 ? yield put(setSignupAuth(response.data.message)) : yield put(authError(response.data.message))
    } catch (error: any) {
        yield put(authError(error.message))
    }
}
export function* fetchLoginAuth({payload}:Actions): Generator<PutEffect| void | any,void,any>{
    try {
        yield put(authLoading())
        const response: AxiosResponse<any,any> = yield call(requestLoginAuth,payload)
        console.log(response)
        response.status === 200 ? yield put(setLoginAuth({message:response.data.message, accessToken:response.data.data.accessToken})) : yield put(authError(response.data.message))
    } catch (error: any) {
        yield put(authError(error.message))
    }
}