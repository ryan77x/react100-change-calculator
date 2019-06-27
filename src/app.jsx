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
          <div className="col-sm-4" >
            <div className="card">
              <div className="card-header">Enter Information</div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="amountDue">How much is due?</label>
                    <input type="number" className="form-control" id="amountDue"/>
                  </div>
                  <div className="form-group">
                    <label for="amountReceived">How much was received?</label>
                    <input type="number" className="form-control" id="amountReceived"/>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-block" name="calculateButton">Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="card bg-success text-white">
                  <div className="card-body" align="center">Success card</div>
                </div>
                <div className="card bg-danger text-white">
                  <div className="card-body" align="center"> Danger card</div>
                </div>

                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the first card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the second card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the third card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the fourth card</p>
                    </div>
                  </div>  
                </div>

                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the first card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the second card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the third card</p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">Some text inside the fourth card</p>
                    </div>
                  </div>  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
