import "./App.css";
import { useState } from "react";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

// function TodoItem(props) {
//   let itemClass =
//     "form-check todoitem " + (props.completed ? "done" : "undone");
//   return (
//     <>
//       <li className={itemClass} ref={(li) => (props._listItem = li)}>
//         <label className="form-check-label">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             onChange={props.markCompleted}
//           />
//           {props.text}
//         </label>
//         <button
//           type="button"
//           className="btn btn-danger btn-sm"
//           onClick={props.deleteItem}
//         >
//           x
//         </button>
//       </li>
//     </>
//   );
// }
//
// function TodoList(props) {
//   return (
//     <>
//       <ul className="todolist">
//         {props.items.map((item) => (
//           <TodoItem
//             key={item}
//             text={item.text}
//             completed={item.done}
//             onItemCompleted={props.onItemCompleted}
//             onDeleteItem={props.onDeleteItem}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }
//
// export default function TodoApp() {
//   const [items, setItems] = useState([]);
//   const [text, setText] = useState("");
//   const [completed, setCompleted] = useState(false);
//
//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleAddItem = (e) => {
//     e.preventDefault();
//
//     // let newItem = {
//     //   id: Date.now(),
//     //   text: text,
//     //   done: false,
//     // };
//     setItems([text]);
//     setText("");
//     // setItems((prevState) => prevState.items.concat(newItem.text));
//   };
//   console.log(items);
//
//   const markItemCompleted = (itemId) => {
//     let updatedItems = items.map((item) => {
//       if (itemId === item.id) item.done = !item.done;
//       return item;
//     });
//
//     // State Updates are Merged
//     setItems([].concat(updatedItems));
//   };
//   const handleDeleteItem = (itemId) => {
//     let updatedItems = items.filter((item) => {
//       return item.id !== itemId;
//     });
//
//     setItems([].concat(updatedItems));
//   };
//
//   return (
//     <>
//       <div>
//         <h3 className="apptitle">TO DO LIST</h3>
//         <div className="row">
//           <div className="col-md-3">
//             <TodoList
//               items={items}
//               onItemCompleted={markItemCompleted}
//               onDeleteItem={handleDeleteItem}
//             />
//           </div>
//         </div>
//         <form className="row">
//           <div className="col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               onChange={handleTextChange}
//               value={text}
//             />
//           </div>
//           <div className="col-md-3">
//             <button
//               className="btn btn-primary"
//               onClick={handleAddItem}
//               disabled={!text}
//             >
//               {"Add #" + (items.length + 1)}
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
