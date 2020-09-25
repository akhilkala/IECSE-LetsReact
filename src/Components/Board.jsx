import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import List from "./List";
import AddList from "./AddList";

import "../Styles/board.css";

export function Board() {
  const initialState = [
    {
      listId: uuid(),
      name: "List one",
      listItems: [
        {
          title: "Check",
          completed: false,
          itemId: uuid(),
        },
        {
          title: "Works",
          completed: false,
          itemId: uuid(),
        },
      ],
    },
    {
      name: "List two",
      listId: uuid(),
      listItems: [
        {
          title: "good",
          completed: false,
          itemId: uuid(),
        },
        {
          title: "good",
          completed: false,
          itemId: uuid(),
        },
      ],
    },
    {
      name: "List two",
      listId: uuid(),
      listItems: [
        {
          title: "this",
          completed: false,
          itemId: uuid(),
        },
        {
          title: "also",
          completed: false,
          itemId: uuid(),
        },
        {
          title: "works",
          completed: false,
          itemId: uuid(),
        },
      ],
    },
  ];
  const [lists, setLists] = useState(initialState);

  const addListHandler = (name) => {
    setLists([...lists, { name: name, listItems: [], listId: uuid() }]);
  };

  const changeListNameHandler = (name, listId) => {
    setLists(
      lists.map((list) =>
        list.listId === listId ? { ...list, name: name } : list
      )
    );
  };

  const deleteListHandler = (listId) => {
    setLists(lists.filter((list) => list.listId !== listId));
  };

  const addItemHandler = (title, listId) => {
    setLists(
      lists.map((list) =>
        list.listId === listId
          ? {
              ...list,
              listItems: [
                ...list.listItems,
                { title: title, completed: false, itemId: uuid() },
              ],
            }
          : list
      )
    );
  };

  return (
    <div className="board">
      <div className="board__lists">
        {lists.map((list) => (
          <List
            key={list.listId}
            name={list.name}
            listItems={list.listItems}
            listId={list.listId}
            addItemHandler={addItemHandler}
            deleteListHandler={deleteListHandler}
            changeListNameHandler={changeListNameHandler}
          />
        ))}

        <AddList addListHandler={addListHandler} listsLength={lists.length} />
      </div>
    </div>
  );
}

export default Board;
