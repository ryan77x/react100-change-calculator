import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <h3>Change Calculator</h3>
        <hr/>
        <div className="row">
        <div className="col-sm-4" >.col-sm-4</div>
        <div className="col-sm-8" >.col-sm-8</div>
        </div>
      </div>  
    );
  }
}

export default App;
