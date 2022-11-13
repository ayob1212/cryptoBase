import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoin } from '../redux/coin/coinAction';
import CoinItem from './CoinItem';

// Styles 
import styles from "./Coin.module.css";

// Styled
import styled from 'styled-components';


// Gif
import loader from "../gif/Loader.gif";



const ErrorCoin = styled.h4`
     color: rgb(227, 96, 73);
    margin: auto;
`

const Coins = () => {

    const state = useSelector(state => state.coinState)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCoin())
    }, [])


    const [serchText, setserchText] = useState("")

    return (
        <div className={styles.boxTable}>
            <div className={styles.box_search}>
                <input type="text" placeholder='Search' name='serchCoin' value={serchText} onChange={(event) => setserchText(event.target.value)} />
            </div>
            <table className={styles.table}>
                <thead>
                    <tr className='white-color'>
                        <th>#</th>
                        <th className={styles.text_left}>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className='hidden'>24h Volume</th>
                        <th className='hidden'>Market cap</th>
                        <th>Last 7 days</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.loading ?
                            null
                            :
                            state.error ?
                                <ErrorCoin>Somethin went wrong</ErrorCoin> :
                                state.coin.filter((value) => {
                                    if (setserchText === "") {
                                        return value
                                    } else if (value.name.toLowerCase().includes(serchText.toLowerCase())) {
                                        return value
                                    }
                                }).map(coin => <CoinItem coinData={coin} key={coin.id} />)
                    }
                </tbody>
            </table>
            <div className={styles.loading}>
                {
                    state.loading ?
                        <img src={loader} alt="gif" /> :
                        null
                }
            </div>
        </div>
    );
};

export default Coins;