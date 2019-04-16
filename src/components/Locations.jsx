import React from 'react';
import AvailableProduce from './AvailableProduce';
import LocationsNew from './LocationsNew';

function Locations(){
  return (
    <div>
      <style jsx>{`
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 3fr;
       `}</style>
      <LocationsNew/>
      <AvailableProduce/>
    </div>
  );
}

export default Locations;
