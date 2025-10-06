import React , {useState} from 'react';

function ToDoList(){

    const [task,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(){

    }

    function moveTaskUp(){

    }

    function moveTaskDown(){

    }
    return(<>
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>

            <input type='text'
                   placeholder='Enter a task...'
                   value={newTask}
                   onChange={handleInputChange}></input>

            <button className='add-button' onChange={addTask}>Add</button>
        </div>
    
    </>);
}

export default ToDoList;