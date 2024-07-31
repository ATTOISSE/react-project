function RaceList({racesList,removeRace,handleEdit}) {
    
    return(
        <table className="table table-bordered mt-3 col-6">
            <thead>
                <tr>
                <th>Id</th>
                <th>libelle</th>
                <th>Action</th></tr>
            </thead>
            <tbody id="">
            {
                racesList.map((race,index)=>(
                    
                    <tr key={index}>
                        <td> {race.id} </td>
                        <td> {race.libelle} </td>
                       <td><button className="btn btn-warning mx-3" onClick={()=>handleEdit(race.id)}>Modifier</button>
                        <button className="btn btn-danger" onClick={()=> removeRace(race.id)}>Supprimer</button></td> 
                    </tr>
                   
                ))
            }
            </tbody>
        </table>
    )
}

export default RaceList