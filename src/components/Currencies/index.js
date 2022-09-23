import './currencies.scss'
import PropTypes from 'prop-types';

const Currencies = ({ isOpen, list, onCurrencyClick, inputSearchValue, onInputSearchChange }) => {
  return (
      <div className={isOpen ? 'currencies currencies--open' : 'currencies'}>
    <h2 className='currencies__title'>Currencies</h2>
        <input
      className='currencies__search'
      type='string'
      placeholder='Rechercher une devise'
      value={inputSearchValue}
      onChange={onInputSearchChange}
    />
    <ul className='currencies__list'>
      {
        list.map((currency) => (
          <li 
            key={currency.name} className="currencies__list__item"
            onClick={() => onCurrencyClick(currency.name)}
            >
          {currency.name}
          </li>
        ))
      }
    </ul>

  </div>
  )

};

Currencies.propTypes = {
  onInputSearchChange: PropTypes.func.isRequired,
  inputSearchValue: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired
    ).isRequired,
    onCurrencyClick: PropTypes.func.isRequired,
};



export default Currencies;
