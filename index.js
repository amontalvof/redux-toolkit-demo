const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { iceCreamActions } = require('./features/iceCream/iceCreamSlice');
const { fetchUsers } = require('./features/user/userSlice');

const unsubscribe = store.subscribe(() => {
    console.log('Updated state:', store.getState());
});

console.log('Initial state:', store.getState());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(2));
store.dispatch(fetchUsers());
// unsubscribe();
// store.dispatch(cakeActions.ordered());
