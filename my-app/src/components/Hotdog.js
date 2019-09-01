import React from "react";

const Hotdog = props => {
  //console.log({hotdog})
  const { name, ingredients, deleteHotdog, updateHotDog } = props;

  return (
    <div>
      <div className="name">{name}</div>
      <div className="ingredients">{ingredients}</div>
      <button
        onClick={() => {
          deleteHotdog(props.id);
        }}
      >
        Delete hotdog
      </button>
      <button
        onClick={() => {
          updateHotDog();
        }}
      >
        UpdateHotDog
      </button>
    </div>
  );
};

export default Hotdog;
