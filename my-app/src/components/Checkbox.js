import React from "react";

const Checkbox = props => {
  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={props.name}
          value={props.name}
          checked={props.isSelected}
          onChange={props.onChange}
          className="form-check-input"
        />
        {props.name}
      </label>
    </div>
  );
};

export default Checkbox;
