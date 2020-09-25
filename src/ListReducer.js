import { v4 as uuid } from "uuid";

export default function (lists, action) {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...lists,
        {
          name: action.payload.name,
          listItems: [],
          listId: uuid(),
        },
      ];

    case "DELETE_LIST":
      return lists.filter((list) => list.listId !== action.payload.listId);

    case "RENAME_LIST":
      return lists.map((list) =>
        list.listId === action.payload.listId
          ? { ...list, name: action.payload.name }
          : list
      );
    case "RENAME_ITEM":
      return lists.map((list) =>
        list.listId === action.payload.listId
          ? {
              ...list,
              listItems: [
                ...list.listItems.map((item) =>
                  item.itemId === action.payload.itemId
                    ? {
                        ...item,
                        title: action.payload.title,
                      }
                    : item
                ),
              ],
            }
          : list
      );
    case "ADD_LIST_ITEM":
      return lists.map((list) =>
        list.listId === action.payload.listId
          ? {
              ...list,
              listItems: [
                ...list.listItems,
                {
                  title: action.payload.title,
                  completed: false,
                  itemId: uuid(),
                },
              ],
            }
          : list
      );

    case "DELETE_LIST_ITEM":
      return lists.map((list) =>
        list.listId === action.payload.listId
          ? {
              ...list,
              listItems: list.listItems.filter(
                (item) => item.itemId !== action.payload.itemId
              ),
            }
          : list
      );

    case "TOGGLE_COMPLETE":
      return lists.map((list) =>
        list.listId === action.payload.listId
          ? {
              ...list,
              listItems: list.listItems.map((item) =>
                item.itemId === action.payload.itemId
                  ? { ...item, completed: !item.completed }
                  : item
              ),
            }
          : list
      );

    default:
      return lists;
  }
}
