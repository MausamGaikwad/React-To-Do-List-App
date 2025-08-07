function ToDoItem(props) {
  function handleDelete() {
    props.onChecked(props.id);
  }

  function handleCheckbox() {
    props.onToggle(props.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={handleCheckbox}
      />
      <span style={{ textDecoration: props.checked ? "line-through" : "none" }}>
        {props.number}. {props.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
export default ToDoItem;
