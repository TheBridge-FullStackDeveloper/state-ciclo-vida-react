import React from "react";
import ExampleChild from "../ExampleChild/ExampleChild";
export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("el componente se ha actualizado");
  }
  //funcion que hace que show sea false
  handleRemove = () => {
    console.log("show", this.state.show);
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        {this.state.show ? <ExampleChild /> : null}
        <button onClick={this.handleRemove}>
          Eliminar componente ExampleChild
        </button>
      </div>
    );
  }
}
