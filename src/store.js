import { createStore } from 'redux';
import allReducers from './reducers';
// import { OPTION_SUBMITE, ADD_CATEGORY } from './reducers';
// import store from './redux/store'



const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// store.subscribe(() => console.log(store.getState()));

// store.dispatch(increment());


export default store;