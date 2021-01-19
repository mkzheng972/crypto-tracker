import './App.css'
import './Coin.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'
import Sunbrust from './Sunbrust'

function App() {
  const [coins, setCoins] = useState([])
  const [searchCoin, setSearchCoin] = useState('')

  useEffect(() => {
    try {
      const getCoins = async () => {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        setCoins(response.data)
      }
      getCoins()
    } catch (error) {
      console.error(error)
    }
  }, [])

  const handleChange = (e) => {
    setSearchCoin(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchCoin.toLowerCase())
  )

  const category = [
    'Rank',
    'Name',
    'Current Price',
    'Circulating Supply',
    '2hr',
    '24hr-percent',
    'Market Cap',
  ]

  return (
    <div className='App'>
      <Sunbrust />
      <h1>Cryptocurreny Tracker</h1>
      <div className='search-coin'>
        <form>
          <input
            type='text'
            placeholder='search coin here'
            className='coin-input'
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className='category'>
        {category.map((title) => (
          <p className='category-item'>{title}</p>
        ))}
      </div>
      <div className='coin-list'>
        {filteredCoins.map((coin, index) => (
          <Coin coin={coin} rank={index} key={coin.id} />
        ))}
      </div>
    </div>
  )
}

export default App
