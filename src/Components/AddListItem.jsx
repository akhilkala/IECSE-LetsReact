import React from "react";

import "../Styles/addItem.css";

import useFormState from "../Hooks/useFormState";

function AddListItem({ addItemHandler, listId, itemsLength }) {
  const message = itemsLength ? "+ Add another Item" : "+ Add an Item";

  const [value, handleChange, handleReset] = useFormState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemHandler(value, listId);
    handleReset();
  };

  return (
    <div className="add-item">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-item__input"
          onChange={handleChange}
          value={value}
          placeholder={message}
        />
      </form>
    </div>
  );
}

export default AddListItem;
