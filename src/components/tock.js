import React from 'react';




function Tock(props) {

const sum = new Date().getHours() - 17;


if (sum >= 0) {
return <h2>It's time!</h2>

} else {

  return <h2>not yet</h2>




}


}
export default Tock;
