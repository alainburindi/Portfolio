import mockAxios from 'axios';
import thunk from 'redux-thunk';
import React from 'react';
import promiseMiddleware from 'redux-promise-middleware';
import configureStore from 'redux-mock-store';
import profileActions from '../Redux/Actions/profile';
import { shallow } from '../enzyme';
import profileReducer from '../Redux/Reducers/profile';
import { Resume, mapStateToProps } from '../App/components/Resume/Resume';

const { getProfile } = profileActions;

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureStore(middlewares);
let wrapper;
const getState = {}; // initial state of the store
const store = mockStore(getState);
const props = { getProfile: jest.fn() };

test('should render the resume page', () => {
  mockAxios.get = jest.fn(() => Promise.resolve({ data: { login: 'AlainBurindi' } }));
  wrapper = shallow(<Resume store={store} {...props} />);
  expect(wrapper).toMatchSnapshot();
});

test('should update the props', () => {
  wrapper = shallow(<Resume store={store} data={{ login: 'AlainBurindi' }} getProfile={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
  expect(props.getProfile).toHaveBeenCalled();
});

test('map state to props', () => {
  mapStateToProps({ profile: { data: { login: 'Alain', follower: 1 } } });
});

test('Action', () => {
  store.dispatch(getProfile());
  mockAxios.get = jest.fn(() => Promise.reject({ data: { message: 'Forbiden' } }));
  store.dispatch(getProfile());
});

test('should have stored all actions', () => {
  expect(store.getActions()[0]).toEqual({
    type: 'GET_PROFILE',
    payload: { login: 'AlainBurindi' }
  });
  expect(store.getActions()[1]).toEqual({ type: 'GET_PROFILE_FAILED' });
});

describe('Reducer', () => {
  test('GET_PROFILE', () => {
    const state = profileReducer({}, { type: 'GET_PROFILE', payload: { login: 'alainburindi' } });
    expect(state).toEqual({ data: { login: 'alainburindi' }, profileFailed: false });
  });
  test('GET_PROFILE_FAILED', () => {
    const state = profileReducer({}, { type: 'GET_PROFILE_FAILED' });
    expect(state).toEqual({
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
      },
      profileFailed: true
    });
  });
  test('DEFAULT', () => {
    const state = profileReducer(undefined, { type: 'UNKNOWN' });
    expect(state).toEqual({});
  });
});
