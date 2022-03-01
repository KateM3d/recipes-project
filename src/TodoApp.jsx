import { useState, useEffect } from "react";

function TodoApp() {
  const [text, setText] = useState(""); //input
  const [items, setItems] = useState([]); //todo array
  const [completed, setCompleted] = useState(false); //status of each task
  const [disabled, setDisabled] = useState(true); //button

  // Run once when app starts to get todos in local storage
  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("items"));
      setItems(todosLocal);
    }
  }, []);

  // Save local todos when todos state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
    setDisabled(false);
  };

  const markItemCompleted = (e) => {
    let completedItems = items.map((item) => {
      return (item.done = true);
    });
    let task = e.target;
    console.log(task);
    task.classList.toggle("crossed");
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { text: text, done: completed }]);
    setText("");
    setDisabled(true);
  };

  const handleDeleteItem = (item) => {
    const taskDeleted = item;

    let updatedItems = items.filter((item) => {
      return item !== taskDeleted;
    });

    setItems(updatedItems);
  };

  const handleRemoveAllCompleted = () => {
    let itemsToCompleteOnly = items.filter((item) => item.done !== true);
    setItems(itemsToCompleteOnly);
  };

  return (
    <>
      <div>
        <h3 className="apptitle">TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={items}
              onItemCompleted={markItemCompleted}
              onDeleteItem={handleDeleteItem}
            />

            {/* <p>todo list component {items[0]}</p> */}
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              onChange={handleTextChange}
              value={text}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary"
              onClick={handleAddItem}
              disabled={disabled}
            >
              {"Add #" + (items.length + 1)}
            </button>
            <button
              className="btn btn-primary"
              onClick={handleRemoveAllCompleted}
              disabled={items === null && disabled}
            >
              Remove all completed
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function TodoList(props) {
  return (
    <>
      <ul className="todolist">
        {props.items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            //   completed={item.done}
            onItemCompleted={props.onItemCompleted}
            onDeleteItem={props.onDeleteItem}
          />
        ))}
      </ul>
    </>
  );
}
function TodoItem(props) {
  return (
    <li key={props.index} onClick={props.onItemCompleted}>
      <span key={props.item} onClick={props.onDeleteItem}>
        {props.item}
      </span>
      <img
        onClick={() => props.onDeleteItem(props.item)}
        src="https://img.icons8.com/color/48/000000/delete-forever.png"
        alt="delete"
        width="20px"
      />
    </li>
  );
}

export default TodoApp;
