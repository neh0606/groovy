
import FakeApi from "../apis/FakeApi"; 


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});


export const login = (credentials, rememberMe) => {
  return (dispatch) => {

    FakeApi(credentials)
      .then((user) => {
        if (rememberMe) {
       
          localStorage.setItem('user', JSON.stringify(user));
        }
        dispatch(loginSuccess(user));
        console.log("login successful")
      })
      .catch((error) => {
        dispatch(loginFailure(error));
        console.log("fail login");
      });
  };
};
