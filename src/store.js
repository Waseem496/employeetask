
import rootReducer from './Components/Reducer/TaskReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore } from 'redux';

export const store = createStore(rootReducer, composeWithDevTools());

