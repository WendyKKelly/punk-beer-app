import React from 'react';
import TripButton from './trip_button';
import Drink from './drink';



function FormattedDate(props) {
 return new Date().toLocaleTimeString();
}function Tuck(props) {

    if (FormattedDate) {


      return (
        <div> <h1>No!</h1></div>
      )
    }
  }

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     date: new Date(),
     isEmptyState: true

   };
  }

  triggerAddTripState = () => {
      this.setState({
        ...this.state,
        isEmptyState: false,
        isAddTripState: true
      })
    }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }




  render() {
    return (
      <div>
        <h2><FormattedDate /></h2>

        <div>
              {this.state.isEmptyState && <TripButton addTrip={this.triggerAddTripState} />}

              {this.state.isAddTripState && <Drink />}
            </div>



      </div>
    );
  }
}

export default Practice
