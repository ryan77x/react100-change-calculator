import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      message: "The total change due is $",
      twenties: 0,
      twentyValue: 20,
      tens: 0,
      tenValue: 10,
      fives: 0,
      fiveValue: 5,
      ones: 0,
      oneValue: 1,
      quarters: 0,
      quarterValue: 0.25,
      dimes: 0,
      dimeValue: 0.10,
      nickels: 0,
      nickelValue: 0.05,
      pennies: 0,  
      pennyValue: 0.01,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCalculateClick = this.handleCalculateClick.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleCalculateClick(event){
    this.resetChanges();
    let amountDue = this.state.amountDue;
    if (amountDue > 0){
      let amountReceived = this.state.amountReceived;
      let amountChange = amountReceived - amountDue;

      this.setState({
        changeDue: Math.abs(Math.round(amountChange * 100)/100)
      });

      if (amountChange >= 0){
        this.setState({
          message: "The total change due is $"
        });

        if (amountChange > 0){
          this.calculate(this.state.oneValue, amountChange);
        }
      }
      else{
        this.setState({
          message: "Additional money owed is $"
        });
      }
    }

    event.preventDefault();
  }

  calculate(faceValue, amount){
    let adjustedAmount;
    if (faceValue == this.state.oneValue)
        adjustedAmount = amount;
    else
        adjustedAmount = Math.round(amount * 100)/100;  //to round a number that is less than 1 such as 0.49999999 to 0.50

    if (adjustedAmount >= faceValue){
        let result = adjustedAmount / faceValue;
        let truncResult = Math.trunc(result);
        let remainder = adjustedAmount % faceValue;

        if (faceValue == this.state.oneValue){
            this.setState({
              ones: truncResult
            });
            if (remainder != 0)
            this.calculate(this.state.quarterValue, remainder);
        }
        else if (faceValue == this.state.quarterValue){ 
          this.setState({
            quarters: truncResult
          });
            if (remainder != 0)
            this.calculate(this.state.dimeValue, remainder); 
        }
        else if (faceValue == this.state.dimeValue){ 
          this.setState({
            dimes: truncResult
          }); 
            if (remainder != 0)
            this.calculate(this.state.nickelValue, remainder);   
        }
        else if (faceValue == this.state.nickelValue){ 
          this.setState({
            nickels: truncResult
          }); 
            if (remainder != 0)
            this.calculate(this.state.pennyValue, remainder);
        }
        else if (faceValue == this.state.pennyValue){
          this.setState({
            pennies: result
          });   
        }
    }
    else if (amount < faceValue && amount > 0){   
        if (faceValue == this.state.oneValue) 
            this.calculate(this.state.quarterValue, amount);
        else if (faceValue == this.state.quarterValue) 
            this.calculate(this.state.dimeValue, amount);
        else if (faceValue == this.state.dimeValue)
            this.calculate(this.state.nickelValue, amount);
        else if (faceValue == this.state.nickelValue)
            this.calculate(this.state.pennyValue, amount);
    }
  }  

  resetChanges(){
    this.setState({
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,  
    }); 
  }

  render() {
    return(
      <div className='container-fluid'>
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
                    <input className="form-control" id="amountDue"
                      name="amountDue" 
                      type="number" 
                      value={this.state.amountDue}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="amountReceived">How much was received?</label>
                    <input className="form-control" id="amountReceived"
                      name="amountReceived" 
                      type="number" 
                      value={this.state.amountReceived}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-block" name="calculateButton" onClick={this.handleCalculateClick}>Calculate</button>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="card bg-success text-white">
                  <div className="card-body text-center">{this.state.message}{this.state.changeDue}</div>
                </div>
                <div className="card-deck">
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Twenties</h1>
                        <p className="change">{this.state.twenties}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Tens</h1>
                        <p className="change">{this.state.tens}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Fives</h1>
                        <p className="change">{this.state.fives}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Ones</h1>
                        <p className="change">{this.state.ones}</p>
                      </p>
                    </div>
                  </div> 
                </div>

                <div className="card-deck">
                <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Quarters</h1>
                        <p className="change">{this.state.quarters}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Dimes</h1>
                        <p className="change">{this.state.dimes}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Nickels</h1>
                        <p className="change">{this.state.nickels}</p>
                      </p>
                    </div>
                  </div>
                  <div className="card bg-light">
                    <div className="card-body text-center">
                      <p className="card-text">
                        <h1>Pennies</h1>
                        <p className="change">{this.state.pennies}</p>
                      </p>
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
