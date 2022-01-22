
import React from 'react';

import moment from 'moment-timezone';


function Timezone(t, tz) {
const zone_name = moment.tz.guess();

return (
              <h2 >
                  Looks like you are in or near {zone_name}, right?
              </h2>
            );
               }


export default Timezone
