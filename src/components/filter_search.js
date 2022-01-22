import React from 'react';
import SearchBar from './search_bar';
import BeerTable from './beer_table';
import BeerAPI from './beer_api';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      error: null,
      isLoaded: false,
      products: []
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



    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

   }

   handleFilterTextChange(filterText) {
     this.setState({
       filterText: filterText
     });
   }

  render() {

    return (
    <div>
    <SearchBar
    filterText={this.state.filterText}
    onFilterTextChange={this.handleFilterTextChange}
    />

    <BeerTable
    products={this.props.products}
    filterText={this.state.filterText} />
    </div>);
  }
}






export default FilterSearch
