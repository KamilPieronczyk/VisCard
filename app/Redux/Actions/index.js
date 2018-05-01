import { SET_USER_NAME_REG } from '../constants/index';
import { SET_USER_SURNAME_REG } from '../constants/index';
import { SET_USER_PASSWORD_REG } from '../constants/index';
import { SET_USER_EMAIL_REG } from '../constants/index';

export const setUserNameReg = name => ({ 
  type: SET_USER_NAME_REG, 
  payload: name 
});

export const setUserSurnameReg = name => ({ 
  type: SET_USER_SURNAME_REG, 
  payload: name 
});

export const setUserPasswordReg = name => ({ 
  type: SET_USER_PASSWORD_REG, 
  payload: name 
});

export const setUserEmailReg = name => ({ 
  type: SET_USER_EMAIL_REG, 
  payload: name 
});
