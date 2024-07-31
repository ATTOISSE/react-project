import './App.css';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Link,
  BrowserRouter ,
  Routes,
  Route 
} from "react-router-dom";
import User from './user/index.js';
import Task from './task/task.js'
import { Statistic } from './statistic/index.js';
export default function App() {
  return (
   
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MyApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/statistic">statistic</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task">Task</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="task" element={<Task />} />
        <Route path="statistic" element={< Statistic/>} />
      </Routes>
    </div>
  </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);