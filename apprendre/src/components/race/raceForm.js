import { useEffect, useState } from "react"



function RaceForm({addRace,editRace}) {
    const [race,setRace] = useState({libelle:''})
    useEffect((editRace)=>{
        if (editRace) {
            setRace(editRace)
            console.log(editRace);
        }
    },[editRace])
    const handleRace = (e)=> {
        e.preventDefault()
        //setRace(race)
        addRace(race)
        setRace({libelle:''})
    }
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setRace({...race,[name]:value}) 
        console.log(race); 
    }
   return(
    <div className="container mt-3">
        <form onSubmit={handleRace}>
            <div className="card">
                <div className="card-header text-center text-white bg-info"><h3>Formulaire d'Ajout</h3></div>
                <div className="card-body">
                    <label>Libelle</label>
                    <input type="text" name="libelle" className="form-control" value={race.libelle} onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary mt-3  col-md-2 offset-5">Ajouter</button>
                </div>
            </div>

        </form>
    </div>
   ) 
}

export default RaceForm