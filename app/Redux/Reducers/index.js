import { SET_STATUS_BAR_COLOR } from '../constants/index';
import { HIDE_STATUS_BAR } from '../constants/index';

const initialState = {
    color: '#7E30E3',
    hideStatusBar: false
};  

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS_BAR_COLOR:         
            return {...state, color: action.payload};
        case HIDE_STATUS_BAR:         
            return {...state, hideStatusBar: action.payload};
        default:
          return state;
      }
};

export default rootReducer;