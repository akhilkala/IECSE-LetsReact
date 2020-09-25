import React from "react";
import useFormState from "../Hooks/useFormState";

import "../Styles/addItem.css";

const AddListItem = ({ addItemHandler, listId, itemsLength }) => {
  const [value, handleChange, handleReset] = useFormState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemHandler(value, listId);
    handleReset();
  };

  const message = itemsLength ? "+ Add another Item" : "+ Add an Item";

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <input
          className="add-item__input"
          placeholder={message}
          type="text"
          onChange={handleChange}
          value={value}
        />
        <button className="add-item__add" type="submit">
          <i class="fas fa-plus-circle"></i>
        </button>
      </form>
    </div>
  );
};

export default AddListItem;
