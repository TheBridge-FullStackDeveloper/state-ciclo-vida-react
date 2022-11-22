import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);//definimos el estado
  const increment = () => {
    //cambio el estado
    setCount(count + 1);
  };
  return (
    <div>
      Counter:{count}
      <button onClick={increment}>+</button>
      {/* <button onclick="increment()">+</button> */}
    </div>
  );
};

export default Counter;

// import React, { Component } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: this.props.value,
//     };
//   }

//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   render() {
//     return <div>Counter: {this.state.counter}
//     <button onClick={this.increment}>+</button>
//     </div>;
//   }
// }
