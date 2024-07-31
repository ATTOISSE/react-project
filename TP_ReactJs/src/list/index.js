function List({ usersList, onEdit, onDelete }) {
    return (
      <table className="table table-bordered mt-3 col-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn btn-warning mx-3" onClick={() => onEdit(user.id)}>Modifier</button>
                <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default List;
  