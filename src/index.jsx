import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './hello-message';
import Timer from './timer'

class Index extends React.Component {
  render() {
    return (
      <div>
        <HelloMessage name="fireflower0" />
        <Timer />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
