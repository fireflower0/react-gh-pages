import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
