import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {name:"walk the dog", priority: "high" },
    {name:"eat chocolate", priority: "low" },
    {name:"cry over lab work", priority: "low" }

  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
     <li key={index} className={task.priority} > {task.name} </li>
    )
    
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask})
    setTasks(copyTasks)
  }








  return (
    <div className= "App">

      <h1> ToDo List </h1>
      <hr></hr>
    
      <ul>
          {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add new Task:</label> 
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        {/* <input type="radio" name="high" value={priority} /> */}
        <input type="submit" value="Save New Task" />




      </form>

    
    </div>
  );
}

export default App;
