const initialState = {
    loading: false,
    trending: [],
    error: ""
}


const trendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TRENDING_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_TRENDING_SUCCESS":
            return {
                ...state,
                loading: false,
                trending: action.payload
            }
        case "FETCH_TRENDING_ERROR":
            return {
                ...state,
                loading: false,
                trending: [],
                error: action.payload
            }

        default:
            return state
    }
}

export default trendingReducer;