import axios from "axios"

const fetchCoinRequest = () => {
    return {
        type: "FETCH_COIN_REQUEST",
    }
}

const fetchCoinSuccess = coin => {
    return {
        type: "FETCH_COIN_SUCCESS",
        payload: coin
    }
}


const fetchCoinError = error => {
    return {
        type: "FETCH_COIN_ERROR",
        payload: error
    }
}


export const fetchCoin = () => {
    return (dispatch) => {
        dispatch(fetchCoinRequest());
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true")
            .then(response => {
                const coinData = response.data;
                dispatch(fetchCoinSuccess(coinData))
            })

            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchCoinError(errorMsg))
            })
    }
}