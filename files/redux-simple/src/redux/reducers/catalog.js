const initialState = [
    'Product1',
    'Product2'
]

const catalog = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return [...state, action.payload.product];
        }
        default: {
            return state;
        }
    }
};

export default catalog;
