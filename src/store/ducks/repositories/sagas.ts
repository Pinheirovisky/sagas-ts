/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadSucces, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/pinheirovisky/repos');

    yield put(loadSucces(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
