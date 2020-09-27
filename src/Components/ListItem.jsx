import React from "react";
import "../Styles/item.css";

function ListItem({ title, listId, itemId, deleteItemHandler }) {
  return (
    <div className="item">
      <div className="item__text">{title}</div>
      <button onClick={() => deleteItemHandler(listId, itemId)}>
        Delete list item
      </button>
    </div>
  );
}

export default ListItem;
