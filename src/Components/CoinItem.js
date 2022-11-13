import React from 'react';
import styles from "./CoinItem.module.css";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';

const CoinItem = (props) => {
    const { coinData } = props;
    const { id, sparkline_in_7d, name, market_cap_rank, image, symbol, current_price, price_change_percentage_24h, total_volume, market_cap } = coinData;
    return (
        <tr className='white-color'>
            <td>{market_cap_rank}</td>
            <td>
                <div className={styles.boxCoinImage}>
                    <Link className={styles.linkImage} to={`/coin/${market_cap_rank}`}><img src={image} alt={name} className={styles.imageCoin} /></Link>
                    <Link className={styles.linkHidden} to={`/coin/${market_cap_rank}`}>{name}</Link>
                </div>
            </td>
            <td><Link className={styles.link} to={`/coin/${market_cap_rank}`}>{symbol.toUpperCase()}</Link></td>
            <td>${current_price.toLocaleString()}</td>
            <td className={price_change_percentage_24h > 0 ? "greenColor" : "redColor"}>{price_change_percentage_24h.toFixed(2)}%</td>
            <td className='hidden'>$ {total_volume.toLocaleString()}</td>
            <td className='hidden'>${market_cap.toLocaleString()}</td>
            <td>
                <Sparklines className={styles.svg} data={sparkline_in_7d.price}>
                    <SparklinesLine color="lightblue" />
                </Sparklines>
            </td>
        </tr>
    );
};

export default CoinItem;