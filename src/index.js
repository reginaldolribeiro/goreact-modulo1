import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

import "./style.scss";

class App extends Component {
  state = {
    counter: 0
  };

  // Interceptando o render e dizendo quando ele deve ser executado ou não, neste caso,
  // ele para de executar quando o valor do counter for 10
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state.counter);
  //   return nextState.counter <= 10;
  // }

  handleClick = () => {
    // assincrono
    this.setState({ counter: this.state.counter + 1 });
    //console.log(this.state.counter);

    // sincrono
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello ReactJS!!!</h1>
        <h2>{this.state.counter}</h2>
        {/* <Button
          onClick={() => {
            alert("Button 1");
          }}
        /> */}
        <Button title="Enviar" onClick={this.handleClick}>
          Somar
        </Button>
        {/* <Button>Testando o link</Button> */}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
