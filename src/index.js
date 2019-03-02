import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    // return <a href="#">{this.props.children}</a>;
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

// Button.defaultProps = {
//   children: "Salvar"
// };

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.string
// };

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    // assincrono
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);

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
