import React from 'react';


import emoji from 'emoji-dictionary';

function Test(props){

const wave = emoji.getUnicode("v");
// const doubled = numbers.map((number) => number * 2);

return (
  <div><h2>Okay, let's see if you can pass an easy test. How many fingers am I holding up?</h2>
  <h2>{wave}</h2>

  </div>
)
}

export default Test
