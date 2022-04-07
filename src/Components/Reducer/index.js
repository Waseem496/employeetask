const initialData = {
  isEmployee: "true",
  employeeId: "",
  employeeName: "",
  taskList: [],
  empData: [
    {
      employeeId: "Sb:123W",
      employeeName: "Jake",
      taskList: [
        { id: "c623cf9b-f916-4d24-b0c0-f0ba2c1679ea", task: "Todo App" },
        { id: "e382cfd5-33c2-461f-a61b-d82c595ae8cb", task: "Cards" },
        { id: "8bc228ec-3fcf-42de-a2c0-f82187d1e00f", task: "Emp App" },
      ],
    },
    {
      employeeId: "sb@shiva123",
      employeeName: "Rose",
      taskList: [
        { id: "9fbcd4c1-e2e3-4d3f-8aca-ed2e60bf340f", task: "AWS" },
        { id: "4ae81cac-618e-4a21-bd2e-7be3445ff3f9", task: "GCS" },
        { id: "5b3f7489-7d9c-424d-8dc2-a0529885dba8", task: "AZURE" },
      ],
    },
  ],
};

export const tasks = (state = initialData,  action ) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE_TASKS':
      return {
        ...state,
        empData: [...state.empData,   action.payload],
        employeeId:'',
        employeeName:'',
        isEmployee:"true",
        taskList:[]
      };

      case 'ADD_EMPLOYEE_TASKS':
      return {
        ...state,
        empData: [...action.payload],
        employeeId:'',
        employeeName:'',
        isEmployee:"true",
        taskList:[]
      };
    // case Add_Emp_Tasks:
    //   return {
    //     ...state,
    //     taskList: [...state.taskList, payload],
    //     task:''
    //   };
    case 'EMPLOYEE_NAME_INPUT':
      return {
        ...state,
        employeeName: action.payload,
      };
    case 'EMPLOYEE_ID_INPUT':
      return {
        ...state,
        employeeId: action.payload,
      };
    //   case Task_Input:
    //   return {
    //     ...state,
    //     task: payload,
    //   };

    case 'ADD_TASK_OBJECT':
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case 'HANDLE_TASK_INPUT_CHANGE':
      return {
        ...state,
      };

    case 'REMOVE_TASK':
      return {
        ...state,
        taskList: action.payload,
      };

    case 'IS_EMPLOYEE_OBJECT':
      return {
        ...state,
        isEmployee: action.payload,
      };

    default:
      return state;
  }
};

