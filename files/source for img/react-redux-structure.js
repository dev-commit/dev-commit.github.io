
// index.js
<Provider store={store}>
    <App />
</Provider>



// App.js
const mapStateToProps = state => ({
	dataStarter: state.reducerStarter
})
const mapDispatchToProps = {
	setName
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


// redux/actions.js
return {
    type: 'NAME',
    payload: name
}


// redux/reducers/reducerStarter.js
return {
    ...state,
    name: action.payload
}


// redux/reducers/index.js
export default combineReducers({
    reducerStarter
});


// redux/store.js
createStore(
	rootReducer,
	applyMiddleware()
)

