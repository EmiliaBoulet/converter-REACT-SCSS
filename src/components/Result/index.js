import './result.scss'
import PropTypes from 'prop-types';


const Result = ({resultAmount, deviseName}) => (
  <div className='result'>
  <h2 className='result__amount'>{resultAmount}</h2>
  <h3 className='result__currency'>{deviseName}</h3>
  </div>
);


Result.propTypes = {
  resultAmount: PropTypes.number.isRequired,
  deviseName: PropTypes.string.isRequired,
};
export default Result;
