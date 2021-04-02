import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import {
  logoutUser,
  setCurrentUser,
  clearCurrentProfile,
} from "../store/actions";
import store from "../store/store";

const jwtTokenFromLocalStorage = localStorage.jwtToken;

const isLogin = () => {
  if (jwtTokenFromLocalStorage) {
    setAuthToken(jwtTokenFromLocalStorage);

    const decoded = jwt_decode(jwtTokenFromLocalStorage);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      store.dispatch(clearCurrentProfile());

      window.location.href = "/login";
    }
  }
};

export default isLogin;
