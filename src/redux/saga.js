import {call, put, takeLatest} from 'redux-saga/effects';
import Action from './action';
import api from '../api';

export default function* () {

    yield takeLatest(Action.Types.FETCH_SEARCH, function* ({query}) {
        const searchResult = yield call(api.searchPhoto, query);
        yield put(Action.Creators.updateState({searchResult}))
    })

    yield takeLatest(Action.Types.FETCH_PHOTO, function* () {
        const mainPhotos = yield call(api.getPhoto);
        yield put(Action.Creators.updateState({mainPhotos}))


    })
    
};

