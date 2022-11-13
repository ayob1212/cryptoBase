import { combineReducers } from "redux";
import coinReducer from "./coin/coinReducer";
import trendingReducer from "./trending/trendingReducer";

const rootReducer = combineReducers({
    coinState: coinReducer,
    trendingState: trendingReducer
})

export default rootReducer;