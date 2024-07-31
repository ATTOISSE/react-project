import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function Task() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    const removeTask = (id) => {
        const updatedTasks = tasks.filter((task, index) => index !== id);
        setTasks(updatedTasks);
    }

    const filteredTasks = tasks.filter(task => task.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='container'>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Menu</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="btn btn-link">Liste des utilisateurs <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/task" className="btn btn-link">Liste des taches</Link>
                        </li>
                    </ul>
                </div>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Rechercher"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </nav>
            <div className='col-md-8 mt-4'>
                <div className='d-flex'>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control mx-2'
                    />
                    <button onClick={addTask} className='btn btn-outline-primary mt-3'>Ajouter</button>
                </div>
                <hr />
                <ul className='list-group'>
                    {filteredTasks.map((task, index) => (
                        <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                            {task}
                            <button
                                onClick={() => removeTask(index)}
                                className='btn btn-danger btn-sm'
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Task;
