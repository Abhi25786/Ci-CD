import apiEndpoints from '../../config/url';
import { apiPost, setItem } from '../../utils/utils';
import { saveUserData } from '../reducer/auth';
import store from '../store';

const dispatch = store.dispatch;
export const userDate = data => {
  dispatch(saveUserData(data));
  setItem('userData', data);
};

// ------------------ signup Api ---------
export const userSignUp = (data, header) => {
  return apiPost(apiEndpoints.SIGNUP, data, header);
};
// ------------------ login Api ---------
export const userLogin = (data, header) => {
  return apiPost(apiEndpoints.LOGIN, data, header);
};
