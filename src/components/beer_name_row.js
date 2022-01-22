import React from 'react';
import BeerAPI from './beer_api';
class BeerNameRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []

    };
  }

  componentDidMount() {

  fetch('https://api.punkapi.com/v2/beers')
  .then(res => res.json())
  .then(
  (result)=> {
    this.setState({
      isLoaded: true,
      products: result
    });
  },
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  }
  )
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

  <ul>
        {products.map(product => (
         <li key={product.name}>
           {product.name} </li>
         ))}
      </ul>
      );
    }
    }
  }

export default BeerNameRow
