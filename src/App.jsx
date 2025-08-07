import { useState } from "react";
import "./App.css";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => [
      ...prevItems,
      { text: inputText, checked: false },
    ]);
    // setItems((prevItems) => [...prevItems, inputText]);
  }
  function toggleChecked(id) {
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To DO List App</h1>
      </div>
      <InputArea onAdd={addItem} />
      <ul>
        {items.map((toDoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            number={index + 1}
            text={toDoItem.text}
            checked={toDoItem.checked}
            onChecked={deleteItem}
            onToggle={toggleChecked}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
