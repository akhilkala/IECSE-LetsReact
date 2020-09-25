import React, { useContext } from "react";
import "../Styles/addItem.css";

import { EventsContext } from "../Contexts";

import useFormState from "../Hooks/useFormState";
import useGetClasses from "../Hooks/useGetClasses";

const Form = ({ listId, itemsLength }) => {
  const [value, handleChange, handleReset] = useFormState("");

  const events = useContext(EventsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    events.addItemHandler(value, listId);
    handleReset();
  };

  const message = itemsLength ? "+ Add another Item" : "+ Add an Item";

  return (
    <div className={useGetClasses("add-item")}>
      <form onSubmit={handleSubmit}>
        <input
          className={useGetClasses("add-item__input")}
          placeholder={message}
          type="text"
          onChange={handleChange}
          value={value}
        />
        <button className={useGetClasses("add-item__add")} type="submit">
          <i class="fas fa-plus-circle"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
