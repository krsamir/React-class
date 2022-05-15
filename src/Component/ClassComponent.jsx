import React, { Component } from "react";
const log = console.log;
export default class ClassComponent extends Component {
  constructor() {
    super();
    // log(1);
    this.state = { name: "", age: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    // this.setState({ name: "Kumar" });
    log(2);
  }
  async componentDidUpdate() {
    log(3);
  }
  async componentWillUnmount() {
    log(4);
  }

  handleClick = () => {
    this.setState({ name: "Samir", age: 5 });
  };

  render() {
    log(5);
    const { name, age } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button className="btn btn-success" onClick={this.handleClick}>
          Click Me!
        </button>
      </div>
    );
  }
}
