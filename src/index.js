import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';

//redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//redux-saga
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

const favoritesList = (state = [], action) => {
    if (action.type === 'SET_FAVORITES') return action.payload
    return state;
}

function* rootSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)

}

function* fetchFavorites(action) {
    try {
        const favorites = yield axios.get('/favorite');
        yield put({ type: 'SET_FAVORITES', payload: favorites.data })
    } catch (err) {
        console.log('could not fetch favorites', err)
    }
}

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

const store = createStore(combineReducers({
    favoritesList
}), applyMiddleware(logger, sagaMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
