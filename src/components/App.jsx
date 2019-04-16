import React from 'react';
import Navbar from './Navbar';
import ContentContainer from './ContentContainer';

function App(){
  return (
    <div>
      <style jsx global >{`
         body {
           margin: 0;
           background: khaki;
         }
       `}</style>
      <Navbar/>
      <ContentContainer/>

    </div>
  );
}

export default App;
