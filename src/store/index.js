import { createStore } from 'redux';
import {applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk';
import { reducers } from './reducers';

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
