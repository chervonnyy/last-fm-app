import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddelware from 'redux-saga'
import logger from 'redux-logger';
import App from './App';
import rootReducer from './store/reducers';
import { watchLoadFriendList } from './store/sagas';

const sagaMiddelware = createSagaMiddelware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddelware));
sagaMiddelware.run(watchLoadFriendList);

ReactDOM.render((
    <Provider store={store}>  
    	<BrowserRouter>
      		<App />
    	</BrowserRouter>
	</Provider>
), document.getElementById('root'));
