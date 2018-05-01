import { SET_USER_NAME_REG } from "../constants/index";
import { SET_USER_SURNAME_REG } from "../constants/index";
import { SET_USER_PASSWORD_REG } from "../constants/index";
import { SET_USER_EMAIL_REG } from "../constants/index";

const initialState = {
  name: "",
  surname: "",
  password: "",
  email: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME_REG:
      return { ...state, name: action.payload };
    case SET_USER_SURNAME_REG:
      return { ...state, surname: action.payload };
    case SET_USER_PASSWORD_REG:
      return { ...state, password: action.payload };
    case SET_USER_EMAIL_REG:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
