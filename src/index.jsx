import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Tetris from './Tetris';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/tetris' component={Tetris} />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
