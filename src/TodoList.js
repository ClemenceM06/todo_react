import { useState } from "react";

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    function handleAddTask(){
        if (input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("");
    }

    function handleDeleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
    }

    console.log(tasks);

    return (
        <div>
            <h2>My Tasks</h2>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter a task..."/>
            <button onClick={handleAddTask}>Add</button>

            <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                {task} <button onClick={() => handleDeleteTask(index)}>DELETE</button>
                </li>
            ))}
            </ul>
        </div>
    );
    }

export default TodoList;
