import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  nameInputId = shortid.generate(); // уникальные id
  tagInputId = shortid.generate();
  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //не допустить перезагрузки страницы

    this.props.onSubm(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lebel htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </lebel>

        <lebel htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </lebel>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
