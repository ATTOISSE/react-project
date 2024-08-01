import { useEffect, useState } from "react"
import { ListCommandes } from "./clientList"

export function FormClient({commandes}){
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [telephone,setTelephone] = useState('')
    const [etat,setEtat] = useState(false)
    const [client,setClient] = useState(null)
    const [orders,setOrders] = useState([])

    const handleClear = ()=>{
        setTelephone('')
        setName('')
        setLastName('')
    }

    const addClient = (e)=>{
        e.preventDefault()
        if (name.trim() != '' && telephone.trim() != '' && lastName.trim() != '') {
            setClient({...client,name,lastName,telephone})
            handleClear()
        }
    }

    useEffect(()=>{
        if (client && commandes.length > 0) {
            setOrders([...orders,{commandes:commandes,client:client,etat:etat}])
        }
    },[client,commandes])

    const handleEtat = ()=>{
        setEtat(true)
    }

    return(
        <div>
            <form className="container">
                <div className="card">
                    <h1 className="bg-dark text-info p-3 text-center"> Enregistrement d'un client</h1>
                    <div className="card-body">
                        <div className="mb-3" >
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input className="form-control" value={name} name="name" type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Prenom</label>
                            <input value={lastName} className="form-control" name="lastName" type="text" id="lastName"  onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Telephone</label>
                            <input value={telephone} className="form-control" name="telephone" type="text" id="telephone" onChange={(e)=>setTelephone(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary col-3 offset-4" onClick={(event)=>addClient(event)}>Enregistrer</button>
                    </div>
                </div>
            </form>
            <ListCommandes orders={orders} handleEtat={handleEtat}/>
        </div>
    )
}