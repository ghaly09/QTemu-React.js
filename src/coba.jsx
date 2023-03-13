import React, { Component } from "react";
import Heroname from "./Heroname";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  setCount(e) {
    this.setState({ count: e });
  }
}
