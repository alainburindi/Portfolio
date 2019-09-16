import actions from '../Actions/index';

const { GET_PROFILE, GET_PROFILE_FAILED } = actions;

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, data: action.payload, profileFailed: false };
    case GET_PROFILE_FAILED:
      return {
        ...state,
        profileFailed: true,
        data: {
          login: 'alainburindi',
          avatar_url: 'https://avatars1.githubusercontent.com/u/41288911?v=4',
          url: 'https://api.github.com/users/alainburindi',
          type: 'User',
          name: 'Alain Burindi',
          location: 'Rwanda',
          public_repos: 16,
          public_gists: 1,
          followers: 1,
          following: 1
        }
      };
    default:
      return state;
  }
};
