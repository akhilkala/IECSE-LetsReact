import React, { useContext, useRef, useEffect } from "react";
import "../Styles/addList.css";

import { EventsContext } from "../Contexts";

import useFormState from "../Hooks/useFormState";
import useGetClasses from "../Hooks/useGetClasses";

export default function AddList({ listsLength }) {
  const events = useContext(EventsContext);

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
    <div ref={addList} className={useGetClasses("add-list")}>
      <input
        style={{ display: "none" }}
        className="add-list__checkbox"
        type="checkbox"
        id="add-list"
        ref={addListCheckbox}
      />

      <div class="add-list__label">
        <label htmlFor="add-list">
          <div class="add-list__text">
            <span>+</span> {message}
          </div>
        </label>
        <input
          value={nameInput}
          onChange={handleChange}
          className="add-list__input"
          type="text"
        />
        <div className={useGetClasses("add-list__bottom")}>
          <button
            onClick={() => {
              events.addListHandler(nameInput);
              handleReset();
              addListCheckbox.current.checked = false;
            }}
            className="add-list__button"
          >
            Add List
          </button>
          <label
            onClick={() => handleChange}
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
