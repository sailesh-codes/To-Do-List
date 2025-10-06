import React , {useState} from 'react';

function ToDoList(){

    const [tasks,setTasks] = useState(["Eat Dinner" , "Do your homework" , "Sleep well"]);
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

            <div>
                <input type='text'
                   placeholder='Enter a task...'
                   value={newTask}
                   onChange={handleInputChange}></input>

            <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='task-up-button' onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className='task-down-button' onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    
    </>);
}

export default ToDoList;