import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer/authReducer";

// Combine reducers to create a root reducer for the Redux store
const rootReducer = combineReducers({
  // 'authReducer' manages authentication-related state
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
