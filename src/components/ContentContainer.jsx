import React from 'react';
import Locations from './Locations';
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Error404 from './Error404';

function ContentContainer(){
  return (
    <div>
      <style jsx>{`
        div {
          width: 1440px;

          margin-left: auto;
          margin-right: auto;
        }

        @media only screen and (max-width: 1500px)  {
          div {
            width: 95vw;
          }
        }
       `}</style>
      <Switch>
        <Route exact path='/' component={Locations} />
        <Route path='/contact' component={NewPostForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default ContentContainer;
