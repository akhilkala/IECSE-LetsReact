import React, { useContext } from "react";
import "../Styles/board.css";

import List from "./List";
import AddList from "./AddList";

import { ListContext } from "../Contexts";

import useGetClasses from "../Hooks/useGetClasses";
import useFormState from "../Hooks/useFormState";

export default function Board() {
  const [lists, dispatch] = useContext(ListContext);

  const [search, setSearch, handleSearchReset] = useFormState("");

  return (
    <div className={useGetClasses("board")}>
      <div className="board__search">
        <input
          placeholder="Search for a list"
          type="text"
          className={useGetClasses("board__search-input")}
          value={search}
          onChange={setSearch}
        />
      </div>
      <div className="board__lists">
        {lists
          .filter((list) =>
            list.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((list) => (
            <List
              key={list.listId}
              name={list.name}
              listItems={list.listItems}
              listId={list.listId}
            />
          ))}
        <AddList listsLength={lists.length} />
      </div>
    </div>
  );
}
