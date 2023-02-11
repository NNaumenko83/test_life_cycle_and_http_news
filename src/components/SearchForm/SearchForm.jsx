import React, { Component } from "react";
import { CiSearch } from "react-icons/ci";
import Checkboxes from "../Checkboxes";
import Radio from "../Radio";
import Select from "../Select";

// Тестимо як працює select
const options = [
  {
    label: "News",
    value: "news",
  },
  {
    label: "Images",
    value: "images",
  },
];

const OPTIONS = ["One", "Two", "Three"];

const INITIAL_STATE = {
  name: "",
  category: "news",
  pageQuantity: "12",
  checkboxes: OPTIONS.reduce(
    (options, option) => ({ ...options, [option]: false }),
    {}
  ),
};

class SearchForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleCheckboxChange = (e) => {
    const { name } = e.target;
    console.log(name);

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => {
        return {
          checkboxes: { ...prevState.checkboxes, [checkbox]: isSelected },
        };
      });
    });
  };

  selecttAll = () => {
    this.selectAllCheckboxes(true);
  };

  deselectAll = () => {
    this.selectAllCheckboxes(false);
  };

  render() {
    const { category, pageQuantity } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="987">Введіть запит</label>
          <input
            name="name"
            type="text"
            id="987"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Select
            options={options}
            onChange={this.handleChange}
            category={category}
          />
          <Radio selectionOption={pageQuantity} onChange={this.handleChange} />
          <Checkboxes
            selectedOptions={this.state.checkboxes}
            selecttAll={this.selecttAll}
            deselectAll={this.deselectAll}
            onChange={this.handleCheckboxChange}
            options={OPTIONS}
          />
          <button type="submit">
            <CiSearch />
            Знайти
          </button>
        </form>
      </>
    );
  }
}
export default SearchForm;
