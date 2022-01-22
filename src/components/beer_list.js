import React, { Component } from 'react';

class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };

  }

  componentDidMount() {

    fetch('https://api.punkapi.com/v2/beers')
    .then(results => {
      return results.json();
    }).then(data => {
      let beers = data.results.map((beer) => {
        return(
          <div key={beer.reuslts}>
          <img src={beer.beers.image_url} />

          </div>
        )
      })
      this.setState({beers: beers});console.log("state", this.state.beers);
    })
  }

    render() {
      return (

        <div className="container2">
        <div className="container1">
        {this.state.beers}
        </div>
        </div>
      )
  }
}


export default BeerList
