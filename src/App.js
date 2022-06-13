import React, {useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    "walk the dog", "eat chocolate", "cry over lab work"
  ]);

  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index}> {task} </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push(newTask)
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
        <input type="submit" value="Save New Task" />




      </form>

    
    </div>
  );
}

export default App;
