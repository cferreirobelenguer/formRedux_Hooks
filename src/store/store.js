
//Component store

import useReducer from '../store/reducer'
import {createStore} from 'redux';

//In the store we import all the reducers
//Store
const store=createStore(useReducer);
console.log(store.getState());

export default store;