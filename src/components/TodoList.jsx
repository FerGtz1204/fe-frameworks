import { useState } from "react";

import TaskList from "./TaskList";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const onChangeItem = (changedItem) => {
    const updateList = list.map((item) => {
      if (item.id === changedItem.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(updateList);
  };

  const onCleanUpCompletedTasks = () => {
    const updateList = list.filter((item) => !item.done);
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
