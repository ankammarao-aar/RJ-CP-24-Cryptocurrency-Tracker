// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoDetails

  return (
    <li className="list-item-container">
      <div className="img-container">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p className="text">{currencyName}</p>
      </div>
      <div className="values-card">
        <p className="usd-values">{usdValue}</p>
        <p className="values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
