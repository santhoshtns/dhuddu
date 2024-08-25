import React from "react";
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      ></input>
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="Button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      ></FaTrashAlt>
    </li>
  );
};

export default LineItem;
