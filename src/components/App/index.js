// == Import
import React from 'react';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import Toggler from 'src/components/Toggler';

import './app.scss';
import currencyData from 'src/data/currencies';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: true,
      baseAmount: 1,
      selectedCurrency:'Swiss Franc',
      inputSearch: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleBaseAmountChange = this.handleBaseAmountChange.bind(this);
    this.handleSearchCurrency = this.handleSearchCurrency.bind(this);
  }

handleBaseAmountChange (event){
  this.setState({
    baseAmount: event.target.valueAsNumber,
  });
}

handleSearchCurrency (event) {
  this.setState({
    inputSearch: event.target.value,

  });

}

handleButtonClick() {
  console.log('clic sur le bouton');
            this.setState({
              isListOpen: !this.state.isListOpen,
            });
}

handleCurrencyClick(newCurrency) {
  this.setState({
    selectedCurrency: newCurrency,
  });
}

getFilterCurrencies(){
  if (this.state.inputSearch === '') {
    return currencyData;
  } 
  else {
    return currencyData
    .filter((currency) => currency.name.toLowerCase().includes(this.state.inputSearch.toLowerCase()));
  }
}

makeConversion() {
  const foundCurrency = currencyData
  .find((currency) => currency.name === this.state.selectedCurrency);
  const resultFloat = foundCurrency.rate * this.state.baseAmount;
  const resultFixed = Math.round(resultFloat * 100) / 100;
  return resultFixed;
}

  render() {
    return (
      <div className="app">
        <Header baseAmount={this.state.baseAmount}
        onBaseAmountChange = {this.handleBaseAmountChange}
        />
        
        <Toggler
          isOpen={this.state.isListOpen} 
          onToggle={this.handleButtonClick}
        />
        <Currencies
        inputSearchValue={this.state.inputSearch}
        isOpen={this.state.isListOpen}
        list={this.getFilterCurrencies()}
        onCurrencyClick={this.handleCurrencyClick}
        onInputSearchChange={this.handleSearchCurrency}
        />
        <Result resultAmount={this.makeConversion()}
          deviseName={this.state.selectedCurrency} />
      </div>
    );
  }
}

// == Export
export default App;
