// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];


export function configureStore(initialState: {}) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares,ReduxThunk)));   //logger를 사용하기 위해서는 맨 뒤에 위치해야 한다.
    sagaMiddleware.run(sagas);
    return store;
}
