import React, { useState, useRef, useEffect } from "react";

import "../Styles/addList.css";
import List from "./List";
import useFormState from "../Hooks/useFormState";

function AddList({ listsLength, addListHandler }) {
  const message = listsLength ? "Add another list" : "Add a list";

  const addListCheckbox = useRef();
  const addList = useRef();

  const [value, handleChange, handleReset] = useFormState("");

  useEffect(() => {
    console.log("use effect is called");

    function clickOutsiteHandler(e) {
      if (!addList.current.contains(e.target)) {
        handleReset();
        addListCheckbox.current.checked = false;
      }
    }
    document.addEventListener("mousedown", clickOutsiteHandler);
  }, []);

  return (
    <div ref={addList} className="add-list">
      <input
        style={{ display: "none" }}
        className="add-list__checkbox"
        type="checkbox"
        id="add-list"
        ref={addListCheckbox}
      />

      <div className="add-list__label">
        <label htmlFor="add-list">
          <div className="add-list__text">
            <span>+</span> {message}
          </div>
        </label>

        <input
          value={value}
          onChange={handleChange}
          className="add-list__input"
          type="text"
        />
        <div className="add-list__bottom">
          <button
            className="add-list__button"
            onClick={() => {
              addListHandler(value);
              handleReset();
              addListCheckbox.current.checked = false;
            }}
          >
            Add List
          </button>

          <label
            onClick={() => handleReset()}
            htmlFor="add-list"
            className="add-list__cancel-button"
          >
            <i class="fas fa-times-circle"></i>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AddList;
