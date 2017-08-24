import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import notification from './notification';
import auth from './auth';
import { router, requests, toast, modal, drawer } from './common';

export default combineReducers({
  form,
  router,
  ui: combineReducers({
    toast,
    modal,
    drawer
  }),
  requests,
  auth
});
