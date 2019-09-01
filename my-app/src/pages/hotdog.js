import React, { Component } from "react";
import Checkbox from "../components/Checkbox";
import { creteHotdogInDb } from "../api";

class AddHotdogPage extends Component {
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
  }
  
  nameHotdogDb = "";
  changeListIngred() {
    this.setState({listIngred: []});
  }
  
  handleChange = event => {
    if(event.target.checked){
      this.state.listIngred.push(event.target.name);
    }
    if(!event.target.checked){
      console.log(this.state.listIngred.indexOf(event.target.name));
      if(this.state.listIngred.indexOf(event.target.name >= 0)){
        this.state.listIngred.splice(this.state.listIngred.indexOf(event.target.name),1);
      }
    }
    
    console.log(this.state.listIngred);
  };

  render() {
    const { pageHandler} = this.props;
    
    return (
      <div className="Newhotdog">
        <input name="newHotdog" onChange= {(event) =>{
            this.nameHotdogDb = event.target.value;
        }

        } />
        {this.allIngredients.map((label,index) => (
          <Checkbox key = {index} name={label}  onChange={this.handleChange} />
        ))}

        <button
          onClick={() => {
            creteHotdogInDb({
              name: this.nameHotdogDb,  
              ingredients: this.state.listIngred
            }).then(() => {
              this.changeListIngred();
              pageHandler("hotdogs");
            });
          }}
        >
          Add new HotDog
        </button>
      </div>
    );
  }
}
export default AddHotdogPage;
