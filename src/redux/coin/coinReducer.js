const initialState = {
    loading: false,
    coin: [],
    error: ""
}


const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COIN_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_COIN_SUCCESS":
            return {
                ...state,
                loading: false,
                coin: action.payload
            }
        case "FETCH_COIN_ERROR":
            return {
                ...state,
                loading: false,
                coin: [],
                error: action.payload
            }

        default: return state

    }
}

export default coinReducer;