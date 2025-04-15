
import { memo } from "react";

const MyToDo = ({ todos }) => {
  console.log("The mytodos component has reloaded");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo (MyToDo);