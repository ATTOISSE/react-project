import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ addUser, editingUser }) {
  const [user, setUser] = useState({ nom: '', prenom: '', age: '',login:'',password:'' });
  const notify = () => toast("Ajout avec succés !!!")
  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleUser = (e) => {
    e.preventDefault();
    if (user.nom.trim() && user.prenom.trim() && user.age && user.login.trim() && user.password.trim()) {
      addUser(user);
      setUser({ nom: '', prenom: '', age: '',login:'',password:'' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleUser}>
        <div className="card">
          <div className="card-header text-center"><h3>{editingUser ? 'Modifier Utilisateur' : 'Ajouter Utilisateur'}</h3></div>
          <div className="card-body">
            <label>Nom</label>
            <input type="text" name="nom" className="form-control" value={user.nom} onChange={handleChange} />
            <label>Prénom</label>
            <input type="text" name="prenom" className="form-control" value={user.prenom} onChange={handleChange} />
            <label>Âge</label>
            <input type="number" name="age" className="form-control" value={user.age} onChange={handleChange} />
            <label>Login</label>
            <input type="text" name="login" className="form-control" value={user.login} onChange={handleChange} />
            <label>Mot de passe</label>
            <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} />
            <button type="submit" onClick={notify} className="btn btn-primary mt-3 col-md-2 offset-5">{editingUser ? 'Sauvegarder' : 'Ajouter'}</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
