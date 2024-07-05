import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task ",id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    }
    let updateToDo = (event) => {
        setNewTodo(event.target.value);
    }
    let deletetodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => {
            return prevTodos.id != id;
        }));
    }
    const markAllDone = () => {
        setTodos((prevTasks) => {
            return prevTasks.map((todo) => {
                return {
                    ...todo,
                    isDone: true
                };
            });
        });
    };
    const markDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }

    return (
        <div>
            <input className="searchBar" placeholder="Add Tasks" value={newTodo} onChange={updateToDo} />
            <br />
            <button className="btnAdd" onClick={addNewTask}>Add</button>
            <br /><br />
            <h2>To-Do-List</h2>
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                                &nbsp;  &nbsp;  &nbsp;
                                <button onClick={() => deletetodo(todo.id)}>Delete</button>
                                <button onClick={() => markDone(todo.id)}>mark as done</button>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btnMark" onClick={markAllDone}>mark all as done</button>
        </div>
    );
}  
