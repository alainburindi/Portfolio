import axios from '../../configs/axios';
import actionTypes from './index';

export default {
  getProfile: () => (dispatch) => {
    axios
      .get('/users/alainburindi', { headers: { Authorization: 'token bb60515c322f5422913110c9c6f660864b6f52eb' } })
      .then((res) => {
        dispatch({ type: actionTypes.GET_PROFILE, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: actionTypes.GET_PROFILE_FAILED });
      });
  }
};
