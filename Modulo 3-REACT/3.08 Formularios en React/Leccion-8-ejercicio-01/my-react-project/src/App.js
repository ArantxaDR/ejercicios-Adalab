import "./App.css";
import React from "react";

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <form className="form">
        <label className="card" htmlFor="name">
          Name:
        </label>
        <input id="name" type="text" />
        <label className="card" htmlFor="name">
          Name:
        </label>
        <textarea className="area" id="description" type="textarea" />
        <label className="card" htmlFor="name">
          Name:
        </label>
        <select
          id="language"
          value={this.state.language}
          onChange={this.handleChange}
        >
          <option>Español</option>
          <option>Inglés</option>
          <option>Portugués</option>
        </select>
      </form>
    );
  }
}

export default FilmForm;
