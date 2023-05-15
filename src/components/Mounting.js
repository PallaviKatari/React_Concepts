import React from "react";

export class Mounting extends React.Component {
  componentDidMount() {
    console.log("Component has mounted!");
  }

  render() {
    console.log("Rendering...");
    return (
      <React.Fragment>
        <hr />
        Hi
      </React.Fragment>
    );
  }
}
