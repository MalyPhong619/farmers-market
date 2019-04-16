import React from 'react';
import Navbar from './Navbar';
import Locations from './Locations';
import Content from './Content';
import { Switch, Route } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Locations} />
        <Route path='/newpost' component={NewPostForm} />
        <Route component={Error404} />
      </Switch>
      <Content/>
    </div>
  );
}

export default App;
