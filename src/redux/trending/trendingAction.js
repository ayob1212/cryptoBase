import axios from "axios"

const fetchTrendingRequest = () => {
    return {
        type: "FETCH_TRENDING_REQUEST",
    }
}

const fetchTrendingSuccess = trending => {
    return {
        type: "FETCH_TRENDING_SUCCESS",
        payload: trending.coins
    }
}


const fetchTrendingError = error => {
    return {
        type: "FETCH_TRENDING_ERROR",
        payload: error
    }
}

export const fetchTrending = () => {
    return (dispatch) => {
        dispatch(fetchTrendingRequest())
        axios.get("https://api.coingecko.com/api/v3/search/trending")
            .then(response => {
                const trendingData = response.data;
                dispatch(fetchTrendingSuccess(trendingData))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchTrendingError(errorMsg))
            })
    }
}