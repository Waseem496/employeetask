import React from "react";

import {useSelector, useDispatch } from "react-redux";
import { createEmployeeTasks, addEmployeeTasks, employeeNameInput, employeeIdInput, isEmployeeObject} from "../Actions";
import TaskList from "../TaskList/TaskList";
import "./CreateTask.css";

function CreateTask() {

  const initialData = useSelector((state) => state.tasks)
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    const newState = {...initialData}
    if (newState.isEmployee) {
      console.log(newState)
     
      const edittedNewEmpData = newState.empData.map(eachEmpData => {
        if(eachEmpData.employeeId === newState.employeeId){
          return {
            ...eachEmpData,
            taskList:[...newState.taskList, ...eachEmpData.taskList]
          }
        }
        return eachEmpData
      })

      dispatch(addEmployeeTasks(edittedNewEmpData))

    } else {
      
      const newEmployeeData = {
        employeeName: initialData.employeeName,
        employeeId: initialData.employeeId,
        taskList: [...initialData.taskList],
      };

      dispatch(createEmployeeTasks(newEmployeeData));
    }
  }

  const changeHandler = (event) => {
    switch (event.target.name) {
      case "EMPLOYEE_NAME_INPUT":
        dispatch(employeeNameInput(event.target.value));
        break;
      case "EMPLOYEE_ID_INPUT":
        dispatch(employeeIdInput(event.target.value));
        break;

      default:
        break;
    }
  };

  const blurHandler = () => {
    const isEmployee = initialData.empData.some(
      (eachEmp, index) =>
        eachEmp.employeeId.toLowerCase() ===
        initialData.employeeId.toLowerCase()
    );
    console.log(isEmployee);
    dispatch(isEmployeeObject(isEmployee));
  };

  return (
    <div>
      <div className="card-box">
        <h1> EMPLOYEE TASKS</h1>
        
      <form className="form-container" onSubmit={handleCreate}>
        <div className="sub-container">
          <label className="label">Employee Id:</label>
          <input
            name="EMPLOYEE_ID_INPUT"
            className="input"
            type="text"
            value={initialData.employeeId}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
        {initialData.isEmployee ? (
          <>
            <TaskList />
            <button type="submit" className="task-button">
              Create Task
            </button>
          </>
        ) : (
          <>
            <div className="sub-container">
              <label className="label">Employee Name:</label>
              <input
                name="EMPLOYEE_NAME_INPUT"
                className="input"
                type="text"
                value={initialData.employeeName}
                onChange={changeHandler}
              />
            </div>
            <TaskList />
            <button type="submit" className="task-button">
              Create Task
            </button>
          </>
        )}
      </form>
      </div>
    </div>
  );
}

export default CreateTask;
