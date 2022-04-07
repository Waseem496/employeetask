import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTaskInputChangeObject, addTaskObject, removeTaskObject } from "../Actions";
import "./TaskList.css";
import { MdAddCircle } from "react-icons/md";
import { AiFillMinusSquare } from "react-icons/ai";

//import "./index.css";
const TaskList = () => {
  const initialData = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleTaskInputChange = (i, e) => {
    let newTasks = [...initialData.taskList];
    newTasks[i][e.target.name] = e.target.value;

    dispatch(handleTaskInputChangeObject(newTasks));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  const addTask = () => {
    // setState([...state, ]);
    dispatch(addTaskObject({ task: "" }));
  };

  const removeTask = (i) => {
    const newTasks = [...initialData.taskList];
    newTasks.splice(i, 1);
    dispatch(removeTaskObject(newTasks));
  };

  return (
    <div className="task-container-component">
      <div className="task-heading-container">
        <p className="tasks-heading">Tasks:</p>

        <button className="add-task-button" type="button" onClick={addTask}>
          ADD 
        </button>
      </div>
      <div>
        {initialData.taskList.map((eachTask, index) => (
          <div key={index} className="task-content">
            {console.log(index)}
            <div>
              <label className="label-name">{`Task ${index + 1}`}</label>
              <input
                type="text"
                name="task"
                className="task-input"
                value={eachTask.task || ""}
                onChange={(e) => handleTaskInputChange(index, e)}
              />
            </div>

            {index ? (
              <button
                type="button"
                className="remove-button"
                onClick={() => removeTask(index)}
              >
                <AiFillMinusSquare/>
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
