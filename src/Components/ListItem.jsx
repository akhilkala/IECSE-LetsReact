import React, { useContext } from "react";
import "../Styles/item.css";

import { EventsContext } from "../Contexts";

import useGetClasses from "../Hooks/useGetClasses";

export default function ListItem({ title, itemId, listId, completed }) {
  const events = useContext(EventsContext);

  return (
    <div className={useGetClasses("item")}>
      <div
        className="item__switch-container"
        onClick={() => events.toggleItemHandler(listId, itemId)}
      >
        <label htmlFor={itemId} className="item__switch">
          <input
            className="item__slider-input"
            type="checkbox"
            id={itemId}
            style={{ display: "none" }}
            checked={completed}
            onChange={() => {
              events.toggleItemHandler(listId, itemId);
            }}
          />
          <span class="item__slider"></span>
        </label>
      </div>

      <input
        className="item__name"
        value={title}
        onChange={(e) =>
          events.changeItemNameHandler(e.target.value, listId, itemId)
        }
        type="text"
      />

      <div
        onClick={() => events.deleteItemHandler(listId, itemId)}
        className="item__delete"
      >
        <i class="fas fa-trash"></i>
      </div>

      {/* <div className="item__text"> {title}</div> */}
    </div>
  );
}
