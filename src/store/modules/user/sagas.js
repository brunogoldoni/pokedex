import {takeLatest, all} from 'redux-saga/effects';

export function setToken({payload}) {
  if (!payload) {
    return;
  }
}

export default all([takeLatest('persist/REHYDRATE', setToken)]);
