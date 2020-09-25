import React, { useContext, useRef } from "react";
import "../Styles/list.css";

import ListItem from "./ListItem";

import { EventsContext } from "../Contexts";

import useGetClasses from "../Hooks/useGetClasses";
import AddListItem from "./AddListItem";

export default function List({ name, listItems, listId }) {
  const events = useContext(EventsContext);

  const nameRef = useRef();

  return (
    <div className={useGetClasses("list")}>
      <div className="list__top">
        <input
          className={useGetClasses("list__name")}
          value={name}
          onChange={(e) => events.changeListNameHandler(e.target.value, listId)}
          type="text"
          ref={nameRef}
        />
        <div
          onClick={(e) => events.deleteListHandler(listId)}
          className={useGetClasses("list__delete")}
        >
          <i class="fas fa-trash"></i>
        </div>
      </div>
      {listItems.map((item) => (
        <ListItem
          key={item.itemId}
          title={item.title}
          listId={listId}
          itemId={item.itemId}
          completed={item.completed}
        />
      ))}
      <AddListItem listId={listId} itemsLength={listItems.length} />
    </div>
  );
}
