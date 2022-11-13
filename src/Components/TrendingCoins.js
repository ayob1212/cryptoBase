import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../redux/trending/trendingAction';

import Loader from "../gif/Loader.gif";
import TrendingItem from './TrendingItem';

import styled from 'styled-components';


const BoxTrennding = styled.div`
    background-color: #111827;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding:  1.5rem;
    border-radius: 1rem;
    margin-top: 40px;
    h1 {
        color: #fff;
        padding-left: 14px;
    }
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ErrorMessage = styled.h4`
    color: rgb(227, 96, 73);
    margin: auto;
`

const TrendingCoins = () => {

    const dispatch = useDispatch()
    const trendingState = useSelector(state => state.trendingState)


    useEffect(() => {
        dispatch(fetchTrending())
    }, [])



    const { error, loading, trending } = trendingState;

    return (
        <>
            <BoxTrennding>
                <h1>Trending</h1>
                <Row>
                    {
                        loading ?
                            <img src={Loader} alt="Loader" /> :
                            error ?
                                <ErrorMessage>{error}</ErrorMessage> :
                                trending.map(coinTrend => <TrendingItem dataTrending={coinTrend} key={coinTrend.item.coin_id} />)
                    }
                </Row>
            </BoxTrennding>
        </>
    );
};

export default TrendingCoins;