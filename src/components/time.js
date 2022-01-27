import React from 'react';



function Time (props) {


   /*  let sum = new Date().getHours() - 0;
    if (sum < 0) {
      sum = -sum;
    } */
    const time = new Date().getHours();
    
    
    return ( <h2>{time}:00 — Using a 24 hour clock...so...</h2>
    
        )
    }
    
    export default Time
    


