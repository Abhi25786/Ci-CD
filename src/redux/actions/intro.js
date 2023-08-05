import { setItem } from '../../utils/utils';
import intro, { introShow } from '../reducer/intro';
import store from '../store';

const dispatch = store.dispatch;
export const introStateUpdate = data => {
  dispatch(introShow(data));
  setItem('intro',data)
  
};
