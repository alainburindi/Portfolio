import actions from '../Actions/index';

const { GET_PROFILE, GET_PROFILE_FAILED } = actions;

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, data: action.payload, profileFailed: false };
    case GET_PROFILE_FAILED:
      return { ...state, profileFailed: true };
    default:
      return state;
  }
};
