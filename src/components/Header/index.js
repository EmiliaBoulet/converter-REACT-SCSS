import './header.scss';
import PropTypes from 'prop-types';

const Header = ({baseAmount, onBaseAmountChange}) => (
  <header className="header">
      <div className="header__content">
        <h1 className="header__title">Converter</h1>
        <input 
        className='header__input'
        type="number"
        min="0"
        max="10000"
        placeholder='montant à convertir en euros'
        value={baseAmount}
        onChange={onBaseAmountChange}
        />
      </div>
  </header>
);

Header.propTypes = {
  onBaseAmountChange: PropTypes.func.isRequired,
  baseAmount: PropTypes.number.isRequired,
};
export default Header;
