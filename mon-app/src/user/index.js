import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../form/index.js';
import List from '../list/index.js';
import { useEffect, useState } from 'react';
import { Link, } from "react-router-dom";
import {deleteUser, getUsers, saveUser, updateUser} from '../service/UserService.js'
import Swal from 'sweetalert2';



function User() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect( () => {
    const loadUsers  = async () => {
      const response =   await getUsers();
      setUsers(response.data);
    } 
    loadUsers();
  }, []);

  const addUser = (user) => {
    if (editingUser) {
      // Update the user
      updateUser(user.id,user)
      setUsers(users.map(u => u.id === editingUser.id ? { ...user} : u));
      setEditingUser(null); // Reset editing state
    } else {
      // Add new user
      saveUser({ ...user, id: users.length + 1 })
      setUsers([...users, { ...user, id: users.length + 1 }]);

    }
  };

  const handleEdit = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setEditingUser(userToEdit);
  };

  

  const handleDelete = (id) => {
    
    const fetchDelete = async () => {
      await deleteUser(id);
   };
    Swal.fire({
      title: "Voulez-vous supprimer?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, Supprime le"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Supprimé !",
          text: "votre fichier a été supprimé",
          icon: "success"
        });
        fetchDelete()
        setUsers(users.filter(u => u.id != id))
      }
      
    });

    
  };

  const filteredUsers = users.filter(user =>
    user.nom.toLowerCase().includes(search.toLowerCase()) ||
    user.prenom.toLowerCase().includes(search.toLowerCase()) ||
    user.age.toString().includes(search)
  );

  return (
    <div className="container">
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
              <li className="nav-item">
                <Link to="/statistic" className="btn btn-link">Statistique</Link>
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
      <div className="mt-4">
        <Form addUser={addUser} editingUser={editingUser} />
        <List usersList={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default User;
