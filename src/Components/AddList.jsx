import React, { useRef, useState, useEffect } from "react";

import "../Styles/addList.css";

import useFormState from "../Hooks/useFormState";

export default function AddList({ listsLength, addListHandler }) {
  const [nameInput, handleChange, handleReset] = useFormState("");
  const addList = useRef();
  const addListCheckbox = useRef();

  useEffect(() => {
    console.log("useEffect is called");

    function clickOutsiteHandler(e) {
      console.log(addList.current);
      if (addList.current && !addList.current.contains(e.target)) {
        handleReset();
        addListCheckbox.current.checked = false;
      }
    }

    document.addEventListener("mousedown", clickOutsiteHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsiteHandler);
    };
  }, []);

  const message = listsLength ? "Add another list" : "Add a list";

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
          value={nameInput}
          onChange={handleChange}
          className="add-list__input"
          type="text"
        />
        <div className="add-list__bottom">
          <button
            className="add-list__button"
            onClick={() => {
              addListHandler(nameInput);
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
        {/*<Form addStuff={addListHandler} />*/}
      </div>
    </div>
  );
}
