import { takeLatest, all } from 'redux-saga/effects';

import auth from '~/store/api/auth';
import { createRequestSaga } from './common';

import { setToast, forwardTo } from '~/store/actions/common';
import { setAuthState, saveLoggedUser, removeLoggedUser } from '~/store/actions/auth';
import { getProfile, replaceProfile } from '~/store/actions/account';
import { closeDrawer } from '~/store/actions/common';

const requestLogin = createRequestSaga({
  request: auth.login,
  key: 'login',
  cancel: 'app/logout',
  success: [
    data => saveLoggedUser(data),
    //({access_token}) => getProfile(access_token),
    () => setAuthState(true),
    () => forwardTo('home')
    //() => setToast('Logged successfully!!!'),
  ],
  failure: [() => setToast("Couldn't login", 'error')]
});

const requestLogout = createRequestSaga({
  request: auth.login,
  key: 'logout',
  success: [
    () => removeLoggedUser(),
    () => setAuthState(false),
    () => closeDrawer(),
    () => forwardTo('login'),
    () => setToast('Logout successfully!!!')
  ],
  failure: [() => setToast("Couldn't logout", 'error')]
});

// root saga reducer
export default [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  // other watcher may be background workers
  function* fetchWatcher() {
    // use takeLatest instead of take every, so double click in short time will not trigger more fork
    yield all([takeLatest('app/login', requestLogin), takeLatest('app/logout', requestLogout)]);
  }
];
