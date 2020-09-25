import React, { useRef } from "react";

import ListItem from "./ListItem";
import AddListItem from "./AddListItem";

import "../Styles/list.css";

export function List({
  addItemHandler,
  deleteListHandler,
  changeListNameHandler,
  name,
  listItems,
  listId,
}) {
  const nameRef = useRef();

  return (
    <div className="list">
      <div className="list__top">
        <input
          className="list__name"
          value={name}
          onChange={(e) => changeListNameHandler(e.target.value, listId)}
          type="text"
          ref={nameRef}
        />
        <div className="list__delete" onClick={() => deleteListHandler(listId)}>
          <i class="fas fa-trash"></i>
        </div>
      </div>

      {listItems.map((listItem) => (
        <ListItem
          title={listItem.title}
          itemId={listItem.itemId}
          key={listItem.itemId}
        />
      ))}
      <AddListItem
        addItemHandler={addItemHandler}
        listId={listId}
        itemsLength={listItems.length}
      />
    </div>
  );
}

export default List;
