import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => setIsDone(true)}
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
