import React from "react";
import Form from "./Form";

function DisplayColor(props) {
  if (props.color !== "") {
    return <li>Couleur: {props.color}</li>;
  } else {
    return <li>Couleur non définie</li>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Dacia",
      model: "Spring",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(color) {
    this.setState({ color: color });
  }
  render() {
    return (
      <div>
        <header>
          <h1>Ma voiture</h1>
        </header>
        <main>
          <h2>Ses caractéristiques</h2>
          <ul>
            <li>Marque: {this.state.brand}</li>
            <li>Modèle: {this.state.model}</li>
            <DisplayColor color={this.state.color} />
          </ul>
          <Form handleChange={handleChange} />
        </main>
      </div>
    );
  }
}
export default App;
