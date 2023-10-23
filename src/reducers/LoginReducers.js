
import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/userActions';

const initialState = {
  user: null,
  error: null,
};

const LoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducers;
