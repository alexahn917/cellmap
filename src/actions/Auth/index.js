import {showSuccess} from "../Utils/notification";

export function logOut() {
  return (dispatch) => {
    dispatch(showSuccess('Successfully logged out!'));
  }
}