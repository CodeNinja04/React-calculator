import React, { Component } from 'react';
import './App.css';

import Result from './components/Result';
import Buttons from "./components/Buttons";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }


        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({

                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };
      render() {
          return (
            <div className="body">
                <div className="calculator-body" >
                  <div className="test"><h1>  Calculator using React</h1></div>
                  <Result result={this.state.result}/>
                  <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
