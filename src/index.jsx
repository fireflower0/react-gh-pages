import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {
  useEffect(() => {
    document.title = 'My Home Page';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#9E9E9E';
  }, []);

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
