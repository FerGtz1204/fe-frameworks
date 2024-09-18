import Checkbox from "./Checkbox";

const TaskList = ({ list, onChangeItem, onCleanUpCompletedTasks }) => {
  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={() => onChangeItem(item)} />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}

      {list.length ? (
        <p>
          <button className="button blue" onClick={onCleanUpCompletedTasks}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
