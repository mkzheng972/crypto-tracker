import './Coin.css'
import React from 'react'

const Coin = ({ coin, rank }) => {
  return (
    <div className='coin-item'>
      <div>{rank + 1}</div>
      <div className='coin-name'>
        {coin.name} {coin.symbol.toUpperCase()}
      </div>
      <img src={coin.image} alt='crytocurrency' className='coin-image' />
      <div className='coin-current-price'>${coin.current_price.toFixed(2)}</div>
      <div className='coin-circulating-supply'>
        {coin.circulating_supply.toLocaleString()}
      </div>
      <div className='coin-24hr-change'>
        {coin.price_change_24h > 0 ? (
          <p className='inc'>${coin.price_change_24h.toFixed(2)}</p>
        ) : (
          <p className='desc'>${coin.price_change_24h.toFixed(2)}</p>
        )}
      </div>
      <div className='coin-24hr-percent-change'>
        {coin.price_change_percentage_24h > 0 ? (
          <p className='inc'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        ) : (
          <p className='desc'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </div>
      <div className='coin-market-cap'>${coin.market_cap.toLocaleString()}</div>
    </div>
  )
}

export default Coin
