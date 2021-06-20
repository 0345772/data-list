import { profileActionTypes } from './actions';

const initialState = {
  profile: null 
}
export const profileReducer = ( state = initialState, actions ) => {
  switch(actions.type) {
    case profileActionTypes.SET_PROFILE:
      return { ...state, profile: actions.payload }

    default:
      return state
  }
  
}