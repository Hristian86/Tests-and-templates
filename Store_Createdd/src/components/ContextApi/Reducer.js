// initail state of the app

export const initialState = {
    basket: [],
    user: [],
    FetchData: []
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CHEK_USER':
            // get user here
            return {
                ...state,
                user: [...state.user, action.user]
            };
            break;
        case 'GET_ITEMS':
            // get items from back end
            return {
                ...state,
                FetchData: [...state.FetchData, action.FetchData]
            };
            break;
        case 'ADD_TO_BASKET':
            // adding items to basek
            return {
                ...state,
                basket: [...state.basket, action.items]
            };
            break;
        default:
            return state;
    }
}

export default reducer;