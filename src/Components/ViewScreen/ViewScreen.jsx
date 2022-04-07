import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import "./ViewScreen.css";


function ViewScreen() {
  const employeeDetails = useSelector((state) => state);
  const {empData} = employeeDetails.tasks;
  console.log(empData);

  //const dispatch = useDispatch();
  return (
    <div className="saved-task-container">
      <h1>Saved Tasks</h1>
      <div className="task-list">
      <ul className='employee-container'>
            {empData.map((eachEmp,index) => 
            <li className='emp-card-list-item-container' key={index}>
            <h1 className='emp-name'>{eachEmp.employeeName}</h1>
            <hr className="line"/>
            <ul className='task-list-container'>
                {eachEmp.taskList.map((eachTask, index) => (
                  <li className='task-list-item-container' key={index}>
                    {eachTask.task} </li>
                ))}
            </ul>
        </li>)}
        </ul>
      </div>
      <Link to="/" className="link-button">
        <button className="back-button"> Back</button>
      </Link>
    </div>
  );
}

export default ViewScreen;
