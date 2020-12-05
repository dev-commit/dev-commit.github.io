
// 1. View
store.dispatch(setName('Tony'));
// Нажали на кнопку
// Срабатывает store.dispatch(setName('Tony'));
// Через mapDispatchToProps()

// 2. Action
const setName = name => ({
	type: 'NAME',
	payload: name
});

// 3. Middleware
const starterMiddleware = store => next => action => {
    // action           => { type: "NAME", payload: "Tony" }  - Action
    // state.getState() => { reducerStarter: { name: "" } }   - Prev State

    // Вызывается Reducer
    const newState = next(action);
    
    // state.getState() => { reducerStarter: { name: "Tony" } }   - New State

    return newState;
}

// 4. Reducer
// - Вызывается из Middleware при next(action)

const reducer = (state, action) => {
    switch (action.type) {
        case NAME: return { ...state, name: action.payload }
        default: return state;
    }
};

// 5. View
// Срабатывает store.getState();
// Через mapStateToProps



const createStore = (rootReducer, initialState) => {
    let state = rootReducer(initialState, { type: '__INIT__' });
    const subscribers = []

    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub())
        },

        subscribe = callback => subscribers.push(callback),
        getState = () => state
    }
}

