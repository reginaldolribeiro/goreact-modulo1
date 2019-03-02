import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

// export default class Button extends Component {
//   static defaultProps = {
//     children: "Salvar"
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };

//   render() {
//     // return <a href="#">{this.props.children}</a>;
//     return <button onClick={this.props.onClick}>{this.props.children}</button>;
//   }
// }
