
export function createEmployeeTasks(payload) {
  return {
    type: 'CREATE_EMPLOYEE_TASKS',
        payload: payload,
  };
}

export function addEmpTasks(payload) {
  return {
    type: 'Add_Emp_Tasks',
    info: "add_emp_tasks",
    payload: payload,
  };
}

export function employeeNameInput(payload) {
  return {
    type: 'EMPLOYEE_NAME_INPUT',
    payload: payload,
  };
}

export function employeeIdInput(payload) {
  return {
    type: 'EMPLOYEE_ID_INPUT',
    payload: payload,
  };
}

// export function taskInput(payload) {
//   return {
//     type: Task_Input,
//     info: "task",
//     payload: payload,
//   };
// }

// import { ADD_TASK_OBJECT,HANDLE_TASK_INPUT_CHANGE, REMOVE_TASK } from "./taskActionsType";

export const addTaskObject = (payload) => {
  return {
    type: 'ADD_TASK_OBJECT',
    payload: payload,
  };
};
export const handleTaskInputChangeObject = (payload) => {
  return {
    type: 'HANDLE_TASK_INPUT_CHANGE',
    payload: payload,
  };
};

export const removeTaskObject = (payload) => {
  console.log(payload);
  return {
    type: 'REMOVE_TASK',
    payload: payload,
  };
};

export const isEmployeeObject = (payload) => {
  return {
    type: 'IS_EMPLOYEE_OBJECT',
    payload: payload,
  };
};

export const addEmployeeTasks = (payload) => {
  return {
    type: 'ADD_EMPLOYEE_TASKS',
    payload: payload,
  };
};
