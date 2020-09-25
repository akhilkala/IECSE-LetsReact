import React, { useContext } from "react";

import { ListContext, EventsContext } from "../Contexts";

export default function EventsProvider(props) {
  const [lists, dispatch] = useContext(ListContext);

  const events = {
    addListHandler: (name) => {
      if (name) {
        dispatch({
          type: "ADD_LIST",
          payload: {
            name,
          },
        });
      }
    },
    changeListNameHandler: (name, listId) => {
      dispatch({
        type: "RENAME_LIST",
        payload: {
          name,
          listId,
        },
      });
    },
    deleteListHandler: (listId) => {
      dispatch({
        type: "DELETE_LIST",
        payload: {
          listId,
        },
      });
    },
    changeItemNameHandler: (title, listId, itemId) => {
      dispatch({
        type: "RENAME_ITEM",
        payload: {
          title,
          itemId,
          listId,
        },
      });
    },
    deleteItemHandler: (listId, itemId) => {
      dispatch({
        type: "DELETE_LIST_ITEM",
        payload: { listId, itemId },
      });
    },
    toggleItemHandler: (listId, itemId) =>
      dispatch({
        type: "TOGGLE_COMPLETE",
        payload: { listId, itemId },
      }),
    addItemHandler: (title, listId) => {
      if (title) {
        dispatch({
          type: "ADD_LIST_ITEM",
          payload: { title, listId },
        });
      }
    },
  };

  return (
    <EventsContext.Provider value={events}>
      {props.children}
    </EventsContext.Provider>
  );
}
