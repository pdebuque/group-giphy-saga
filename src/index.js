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
	if (action.type === 'SET_FAVORITES') return action.payload;
	return state;
};

// const searchTerm = (state = '', action) => {
// 	console.log('result: ', state);
// 	if (action.type === 'SET_SEARCH_TERM') return action.payload;
// 	return state;
// };

const searchResults = (state = [], action) => {
	if (action.type === 'SET_SEARCH_RESULTS') {
		console.log('setting search results: ', action.payload.data);
		return action.payload.data;
	}
	return state;
};

function* rootSaga() {
	yield takeEvery('FETCH_FAVORITES', fetchFavorites);
	yield takeEvery('MAKE_SEARCH', makeSearch);
	yield takeEvery('ADD_TO_FAVORITES', addToFavorites);
}

// GET request: get all favorite gifs from the database
function* fetchFavorites(action) {
	console.log('in fetchFavorite');
	try {
		const favorites = yield axios.get('/api/favorites');
		yield put({ type: 'SET_FAVORITES', payload: favorites.data });
	} catch (err) {
		console.log('could not fetch favorites', err);
	}
}

function* makeSearch(action) {
	try {
		console.log('making search with keyword ', action.payload);
		const searchResults = yield axios.get(`/api/search/${action.payload}`);
		yield put({ type: 'SET_SEARCH_RESULTS', payload: searchResults.data });
	} catch (err) {
		console.log('could not search', err);
	}
}

function* addToFavorites(action) {
	try {
		console.log('adding to favorites. url: ', action.payload);
		yield axios.post('/api/favorites', action.payload);
		console.log('added to favorites');
		yield put({ type: 'FETCH_FAVORITES' });
	} catch (err) {
		console.log('could not add to favorites', err);
	}
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({
		favoritesList,
		searchResults,
	}),
	applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
