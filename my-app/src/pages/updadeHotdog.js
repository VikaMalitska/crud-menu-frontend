import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { updateHotDogDB } from "../api";

class UpdateHotdogPage extends Component {
  allIngredients = [
    "bacon",
    "hot dog buns",
    "Swiss cheese",
    "barbeque sauce",
    "red onion",
    "chili powder",
    "tomato",
    "mayonnaise",
    "potatoes"
  ];
  state = {
    listIngred: []
  };
  //listIngred = [];
  //nameHotdogDb = "";
  changeListIngred() {
    this.setState({listIngred: []});
  }

  handleChange = event => {
    //console.log(event.target.value);
    if (event.target.checked) {
      this.setState({
        listIngred: this.state.listIngred.concat(event.target.value)
      });
    }
    if (!event.target.checked) {
      this.setState({
        listIngred: this.state.listIngred.filter(name =>
          name !== event.target.value
        )
      });
    }
    console.log(this.state.listIngred);
    //event.target.checked = !event.target.checked;
  };

  componentDidMount() {
    this.setState({ listIngred: this.props.data.ingredients });
    console.log(this.state.listIngred);
  }

  render() {
    const { pageHandler, data } = this.props;

    return (
      <div>
        <div>{data.name}</div>

        {this.allIngredients.map((label, index) => (
          <Checkbox
            key={index}
            name={label}
            isSelected={
              this.state.listIngred.indexOf(label) > -1
            }
            onChange={this.handleChange}
          />
        ))}

        <button
          onClick={() => {
            console.log("updateHotDogDB:" + data.id + " " + this.state.listIngred)
            updateHotDogDB({
              id: data.id,
              ingredients: this.state.listIngred
            }).then(() => {
              this.changeListIngred([]);
              pageHandler("hotdogs");
            });
          }}
        >
          Update HotDog
        </button>
      </div>
    );
  }
}
export default UpdateHotdogPage;
