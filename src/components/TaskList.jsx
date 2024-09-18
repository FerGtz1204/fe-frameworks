import Checkbox from "./Checkbox";

const TaskList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (changedItem) => {
    const updateList = list.map((item) => {
      if (item.id === changedItem.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  const chk = list.map((item) => (
    <Checkbox
      key={item.id}
      data={item}
      onChange={(item) => onChangeStatus(item)}
    />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "No tasks"}

      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
