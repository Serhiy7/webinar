import React, { Component } from "react";
import classNames from "classnames"; // пакет для объединения динам классов в компоненте
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    return classNames("ColorPicker__option", {
      "ColorPicker__option--active": index === this.state.activeOptionIdx,
    });

    // const optionClasses = ["ColorPicker__option"];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push("ColorPicker__option--active");
    // }
    // return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
