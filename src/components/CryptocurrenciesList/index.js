// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoding: true}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoData: updatedData, isLoding: false})
  }

  render() {
    const {cryptoData, isLoding} = this.state

    return (
      <div className="bg-list-container">
        {isLoding ? (
          <div data-testid="loader" className="loader-card">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-list-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
              className="crypto-img"
            />
            <div className="main-card">
              <div className="list-item-card">
                <p className="coin-type">Coin Type</p>
                <div className="usd-card">
                  <p className="colum-name">USD</p>
                  <p className="colum-name">EURO</p>
                </div>
              </div>
              <ul className="list-container">
                {cryptoData.map(each => (
                  <CryptocurrencyItem key={each.id} cryptoDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
