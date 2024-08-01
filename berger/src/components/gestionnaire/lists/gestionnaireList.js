export function ListGestionnaire({bergers,handleArchive,handleUpdate}){
    return(
        <div className="container mt-4">
            <table className="table table-responsive">
                <thead>
                    <tr key="">
                        <th>N°</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bergers.map((berger,index)=>(
                        <tr key={index} >
                            <td>{berger.id}</td>
                            <td>{berger.name}</td>
                            <td>{berger.price}</td>
                            <td>{berger.description}</td>
                            <td>
                                <button className="btn btn-warning mx-2" onClick={()=> handleUpdate(berger.id)}>Modifier</button>
                                <button className="btn btn-danger" onClick={()=> handleArchive(berger.id)}>Archiver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}