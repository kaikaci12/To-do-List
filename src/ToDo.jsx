import { useState } from "react";
import "./ToDo.css";

function ToDoApp() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask(e) {
    e.preventDefault();
    if (value === "") return;
    setTodos((prevTodos) => [...prevTodos, { task: value, completed: false }]);
    setValue("");
  }

  function deleteTask(index) {
    const updatedTasks = todos.filter((_, i) => i !== index);
    setTodos(updatedTasks);
  }

  function toggleTaskCompletion(index) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className="main-container">
      <h1>Todo</h1>
      <div className="to-do-window">
        <div className="time-and-image">
          <span>Thur 9</span>
          <h2>6:23 AM</h2>
        </div>

        <div className="add-list-container">
          <div className="input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#20EEB0"
                stroke="#20EEB0"
                strokeWidth="2"
              />
              <path
                d="M10.7783 14.657L8.9143 12.7253C8.81386 12.6212 8.67763 12.5628 8.53558 12.5628C8.39354 12.5628 8.25731 12.6212 8.15687 12.7253C8.05643 12.8294 8 12.9706 8 13.1178C8 13.1907 8.01385 13.2628 8.04077 13.3302C8.06768 13.3975 8.10714 13.4587 8.15687 13.5102L10.4023 15.8372C10.6118 16.0543 10.9502 16.0543 11.1597 15.8372L16.8431 9.94748C16.9436 9.8434 17 9.70222 17 9.55502C17 9.40782 16.9436 9.26665 16.8431 9.16256C16.7427 9.05848 16.6065 9 16.4644 9C16.3224 9 16.1861 9.05848 16.0857 9.16256L10.7783 14.657Z"
                fill="white"
              />
            </svg>
            <input
              type="text"
              placeholder="Note"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <button className="add-todo-list" type="submit" onClick={addTask}>
            +
          </button>
        </div>
        <div className="todo-lists-container">
          {todos.map((todo, index) => (
            <div className="task-container" key={index}>
              <div className="task-info">
                <span
                  className={todo.completed ? "task completed" : "task"}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {todo.task}
                </span>
              </div>
              <div className="checkbox-and-delete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="delete-list"
                  onClick={() => deleteTask(index)}
                >
                  <path
                    d="M2 6H22M10 11V16M14 11V16M4 6H20L18.42 20.22C18.3658 20.7094 18.1331 21.1616 17.7663 21.49C17.3994 21.8184 16.9244 22 16.432 22H7.568C7.07564 22 6.60056 21.8184 6.23375 21.49C5.86693 21.1616 5.63416 20.7094 5.58 20.22L4 6ZM7.345 3.147C7.50675 2.80397 7.76271 2.514 8.083 2.31091C8.4033 2.10782 8.77474 2 9.154 2H14.846C15.2254 1.99981 15.5971 2.10755 15.9176 2.31064C16.2381 2.51374 16.4942 2.80381 16.656 3.147L18 6H6L7.345 3.147V3.147Z"
                    stroke="#FF4545"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="oval-checkbox"
                  onClick={() => toggleTaskCompletion(index)}
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#20EEB0"
                    stroke="#20EEB0"
                    strokeWidth="2"
                  />
                  {todo.completed && (
                    <path
                      d="M10.7783 14.657L8.9143 12.7253C8.81386 12.6212 8.67763 12.5628 8.53558 12.5628C8.39354 12.5628 8.25731 12.6212 8.15687 12.7253C8.05643 12.8294 8 12.9706 8 13.1178C8 13.1907 8.01385 13.2628 8.04077 13.3302C8.06768 13.3975 8.10714 13.4587 8.15687 13.5102L10.4023 15.8372C10.6118 16.0543 10.9502 16.0543 11.1597 15.8372L16.8431 9.94748C16.9436 9.8434 17 9.70222 17 9.55502C17 9.40782 16.9436 9.26665 16.8431 9.16256C16.7427 9.05848 16.6065 9 16.4644 9C16.3224 9 16.1861 9.05848 16.0857 9.16256L10.7783 14.657Z"
                      fill="white"
                    />
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
