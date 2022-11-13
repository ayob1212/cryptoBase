import React, { useEffect, useState } from 'react';

import axios from 'axios';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoin } from '../redux/coin/coinAction';

// Params
import { useParams } from 'react-router-dom';

//Styles
import styles from "./CoinDetails.module.css"

// Sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CoinDetails = () => {

    const userId = useParams();
    const idCoin = userId.id;


    const data = useSelector(state => state.coinState);
    const dispatch = useDispatch();

    const [coinArray, setCoin] = useState("")


    const coinData = async () => {
        try {
            await axios.get(url)
                .then((response) => {
                    setCoin(response.data)
                })
        } catch (error) {
            console.error(`ERROR: ${error}`)
        }
    }


    useEffect(() => {
        if (!data.coin.length) dispatch(fetchCoin());
        coinData()
    }, [])

    const
        {
            id,
            total_volume,
            high_24h,
            market_cap,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
            sparkline_in_7d,
            fully_diluted_valuation,
            circulating_supply,
            low_24h } = data.coin[idCoin - 1]
    const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`


    return (
        <div className={styles.details}>
            <div className={styles.coinWithText}>
                <img src={image} className={styles.imageCoin} alt={name} />
                <h1 className={styles.nameCoin}>{name} ({symbol.toUpperCase()})</h1>
            </div>
            <div className={styles.priceWithPecent}>
                <h3 className={styles.priceCoin}>${current_price.toLocaleString()}</h3>
                <p className={price_change_percentage_24h > 0 ? "greenColor" : "redColor"}>
                    <svg className={price_change_percentage_24h > 0 ? "topIcon" : "bottomIcon"} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" color={price_change_percentage_24h > 0 ? "grren" : "#b32326"} height="1.3em" width="1.3em"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" /></svg>
                    {price_change_percentage_24h.toFixed(2)} %
                </p>
            </div>
            <div className={styles.charts}>
                <Sparklines data={sparkline_in_7d.price}>
                    <SparklinesLine color="lightblue" />
                </Sparklines>
            </div>
            <div className={styles.listDetails}>
                <ul>
                    <li>
                        <h4>Market Cap</h4>
                        ${market_cap?.toLocaleString() || ''}
                    </li>
                    <li>
                        <h4>fully Diluted Valuation</h4>
                        ${fully_diluted_valuation?.toLocaleString() || ''}
                    </li>
                    <li>
                        <h4>24h High</h4>
                        ${high_24h?.toLocaleString() || ''}
                    </li>
                </ul>
                <ul>
                    <li>
                        <h4>24 Hour Trading Volume</h4>
                        ${total_volume?.toLocaleString() || ''}
                    </li>
                    <li>
                        <h4>Circulating Supply</h4>
                        ${circulating_supply?.toLocaleString() || ''}
                    </li>
                    <li>
                        <h4>24h Low</h4>
                        ${low_24h?.toLocaleString() || ''}
                    </li>
                </ul>
            </div>
            <div className={styles.aboutCoin}>
                <h1>About {name} ({symbol})</h1>
                <p dangerouslySetInnerHTML={{ __html: coinArray.description?.en }}></p>
            </div>
        </div>
    );
};

export default CoinDetails;