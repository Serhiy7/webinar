import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
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

  handleLicenceChange = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          Senior
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence} // в момент клика Браузер сам «переключает» внутреннее свойство input.checked на противоположное (из false → true, или наоборот).
            onChange={this.handleLicenceChange} // браузер генерирует событие и React вызывает  обработчик
          />
          Согласен с условиями
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
