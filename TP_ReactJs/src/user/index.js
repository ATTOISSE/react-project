import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../form/index.js';
import List from '../list/index.js';
import { useEffect, useState } from 'react';
import { getUsers } from '../service/users.js';

function User() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const loadUers = async ()=>{
      const response = await getUsers();
        setUsers(response.data)
    }
    loadUers()
  }, []);

  const addUser = (user) => {
    if (editingUser) {
      // Update the user
      setUsers(users.map(u => u.id === editingUser.id ? { ...user} : u));
      setEditingUser(null); // Reset editing state
    } else {
      // Add new user
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
  };

  const handleEdit = (id) => {
    const userToEdit = users.find(user => user.id === id);
    setEditingUser(userToEdit);
  };

  const handleDelete = (id) => {
    const remove = async ()=>{
      await deleteUsers(id)
    }
    remove()
  };

  const filteredUsers = users.filter(user =>
    user.nom.toLowerCase().includes(search.toLowerCase()) ||
    user.prenom.toLowerCase().includes(search.toLowerCase()) ||
    user.age.toString().includes(search)
  );

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Liste des utilisateurs</a>
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
