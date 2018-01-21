import React from 'react'
import {Row} from 'react-bootstrap'

class Home extends React.Component {

  state = {
    currencyList: []
  };

  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/B/?format=json")
      .then(rsp => rsp.json())
      .then(data => {
        const currency = data[0];
        console.log(currency);
        this.setState({currencyList: currency.rates});
      });
  }

  render() {

    return (
      <Row>
        <h1>Kursy walut</h1>

        {this.state.currencyList.map(item => (
          <div>
            {item.currency}: {item.mid} zł
          </div>
        ))}
      </Row>
    )

  }
}

export default Home;