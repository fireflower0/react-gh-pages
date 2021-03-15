import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const FormWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: #E0F2F1;
`;

const App = () => {
  useEffect(() => {
    document.title = 'My Home Page';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#ECEFF1';
  }, []);

  return (
    <FormWrapper>
      <Router>
        <Navbar />
        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Router>
    </FormWrapper>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
