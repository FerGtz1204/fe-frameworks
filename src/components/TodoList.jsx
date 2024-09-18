import { useState } from "react";

import TaskList from "./TaskList";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const onChangeItem = (changedItem) => {
    console.log(list);
    console.log(changedItem);
    const updateList = list.map((item) => {
      if (item.id === changedItem.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    console.log(updateList);
    setList(updateList);
  };

  const onCleanUpCompletedTasks = () => {
    console.log(list);
    const updateList = list.filter((item) => !item.done);
    console.log(updateList);
    setList(updateList);
  };

  return (
    <div>
      <TodoForm handleAddItem={handleAddItem} />
      <TaskList
        list={list}
        onChangeItem={onChangeItem}
        onCleanUpCompletedTasks={onCleanUpCompletedTasks}
      />
    </div>
  );
};

export default TodoList;
