import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HOMEPAGE</h1>
        <p>This is a mock test about the home page.</p>
        <p>Here should have an image as a logo or text for the portfolio.</p>
        <p>Also, the instructions to enter the portfolio (scrolling down)</p>

        <Link to='Projects'>Projects!</Link>
      </div>
    );
  }
}
