import { setItem } from '../../utils/utils';
import { saveUserData } from '../reducer/auth';
import intro, { introShow } from '../reducer/intro';
import store from '../store';

const dispatch = store.dispatch;
export const userDate = data => {
  dispatch(saveUserData(data));
  setItem('userData',data)
};
