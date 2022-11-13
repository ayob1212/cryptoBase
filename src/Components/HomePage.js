import React from 'react';
import styled from "styled-components"
import Coins from './Coins';
import TrendingCoins from './TrendingCoins';


const BoxCoin = styled.div`
    background-color: #111827;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding: 0rem 1.5rem;
    @media screen and (max-width: 768px) {
        padding: 0.2rem;
        margin: 1rem 0px;
    }
    border-radius: 1rem;
`

const HomePage = () => {
    return (
        <>
            <BoxCoin>
                <Coins />
            </BoxCoin>
            <TrendingCoins />
        </>
    );
};

export default HomePage;