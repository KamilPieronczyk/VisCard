import { SET_STATUS_BAR_COLOR } from '../constants/index';
import { HIDE_STATUS_BAR } from '../constants/index';

export const setStatusBarColor = color => ({ 
    type: SET_STATUS_BAR_COLOR, 
    payload: color 
});

export const hideStausBar = (hide) => ({
  type: HIDE_STATUS_BAR,
  payload: hide
})
