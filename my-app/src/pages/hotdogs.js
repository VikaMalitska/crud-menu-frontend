import React, { Component } from "react";
import Hotdog from "../components/Hotdog";
import { removeHotdogFromDb, getHotdogFromDb } from "../api";

const Name = ({ name }) => <h2>{name}</h2>;
const Ingredients = ({ ingredients }) =>
  ingredients.map((ingredient,index) => <li key={index}>{ingredient}</li>);

class HotdogsPage extends Component {
  state = {
    list: []
  };

  async deleteHotdog(id) {
    const result = await removeHotdogFromDb(id);
    const res = await result.json();
    if (res.success) {
      const list = this.state.list.filter(hotdog => hotdog.id !== id);
      this.setState({ list });
    }
  }
  componentDidMount() {
    this.getHotdogs();
  }

  async getHotdogs() {
    const result = await getHotdogFromDb();
    const res = await result.json();
    const list = res.result;
    this.setState({ list });
  }

  render() {
    const { pageHandler } = this.props;
    return (
      <div className="App">
        <div>
          <button
            onClick={() => {
              pageHandler("addHotdog");
            }}
          >
            Add hotdog
          </button>
          {this.state.list.map(hotdog => (
            <Hotdog
              key={hotdog.id}
              {...hotdog}
              name={<Name name={hotdog.name} />}
              ingredients={<Ingredients ingredients={hotdog.ingredients} />}
              deleteHotdog={id => {
                this.deleteHotdog(id);
              }}
              updateHotDog = { () => {
                 pageHandler("updateHotdog", hotdog);
               }
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default HotdogsPage;
