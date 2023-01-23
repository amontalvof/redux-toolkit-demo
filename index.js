const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');

const unsubscribe = store.subscribe(() => {
    console.log('Updated state:', store.getState());
});

console.log('Initial state:', store.getState());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
unsubscribe();
store.dispatch(cakeActions.ordered());
