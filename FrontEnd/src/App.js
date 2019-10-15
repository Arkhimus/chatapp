import React from 'react';
import PropTypes from 'react-proptypes';

const appStyle = {
  // marginLeft: '5vw',
  fontFamily: 'Helvetica',
  fontWeight: 400,
};

const App = ({ children }) => (
  <div style={appStyle}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
