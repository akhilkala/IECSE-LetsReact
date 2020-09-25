import React from "react";

import reducer from "../ListReducer.js";

import { ListContext } from "../Contexts";
import useLocalStorage from "../Hooks/useLocalStorageReducer.js";

export default function ListContextProvider(props) {
  const initialState = [];
  // const initialState = [
  //   {
  //     listId: uuid(),
  //     name: "List one",
  //     listItems: [
  //       {
  //         title: "Check",
  //         completed: true,
  //         itemId: uuid(),
  //       },
  //       {
  //         title: "Works",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //     ],
  //   },
  //   {
  //     name: "List two",
  //     listId: uuid(),
  //     listItems: [
  //       {
  //         title: "good",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //       {
  //         title: "good",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //     ],
  //   },
  //   {
  //     name: "List two",
  //     listId: uuid(),
  //     listItems: [
  //       {
  //         title: "this",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //       {
  //         title: "also",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //       {
  //         title: "works",
  //         completed: false,
  //         itemId: uuid(),
  //       },
  //     ],
  //   },
  // ];

  const [state, dispatch] = useLocalStorage(
    "listContext",
    initialState,
    reducer
  );

  return (
    <ListContext.Provider value={[state, dispatch]}>
      {props.children}
    </ListContext.Provider>
  );
}
