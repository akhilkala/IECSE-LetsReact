import React, { useRef } from "react";

import "../Styles/list.css";

import ListItem from "./ListItem";
import AddListItem from "./AddListItem";

function List({
  name,
  listId,
  listItems,
  deleteListHandler,
  addItemHandler,
  changeListNameHandler,
  deleteItemHandler,
}) {
  const inputRef = useRef();
  return (
    <div className="list">
      <div className="list__top">
        <input
          className="list__name"
          value={name}
          onChange={(e) => changeListNameHandler(e.target.value, listId)}
          type="text"
          ref={inputRef}
        />

        <div className="list__delete" onClick={() => deleteListHandler(listId)}>
          <i class="fas fa-trash"></i>
        </div>

        <div className="list__delete" onClick={() => inputRef.current.focus()}>
          Edit
        </div>
      </div>

      {listItems.map((listItem) => (
        <ListItem
          title={listItem.title}
          deleteItemHandler={deleteItemHandler}
          key={listItem.itemId}
          listId={listId}
          itemId={listItem.itemId}
        />
      ))}
      <AddListItem
        addItemHandler={addItemHandler}
        itemsLength={listItems.length}
        listId={listId}
      />
    </div>
  );
}

export default List;
