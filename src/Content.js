import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
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
              ></FaTrashAlt>
            </li>
          ))}
        </ul>
      ) : (
        <p style={ {marginTop:'2rem'} }> The list is empty</p>
      )}
    </main>
  );
};

export default Content;
