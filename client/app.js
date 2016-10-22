import React from 'react';
import Nav from './nav';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default App;
