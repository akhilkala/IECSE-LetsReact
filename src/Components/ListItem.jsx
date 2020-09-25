import React from "react";
import "../Styles/item.css";

export default function ListItem({ title }) {
  return (
    <div className="item">
      <div className="item__text"> {title}</div>
    </div>
  );
}
