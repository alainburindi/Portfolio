import axios from '../../configs/axios';
import actionTypes from './index';

export default {
  getProfile: () => (dispatch) => {
    axios
      .get('/users/alainburindi', { headers: { Authorization: 'token 2c01dfeb3e7ba65f03010f3afc1affb3339a395e' } })
      .then((res) => {
        dispatch({ type: actionTypes.GET_PROFILE, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.GET_PROFILE_FAILED });
      });
  }
};
