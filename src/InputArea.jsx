import { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleAdd() {
    if (inputText.trim() !== "") {
      props.onAdd(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Add Tasks To Do..."
      />
      <button onClick={handleAdd}>
        <span>Add Task</span>
      </button>
    </div>
  );
}

export default InputArea;
