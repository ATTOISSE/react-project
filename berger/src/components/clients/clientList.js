import { useEffect, useState } from "react"

export function ListCommandes({orders}) {

    const [commande,setCommande] = useState([])
    const [clients,setClients] = useState(null)
    useEffect(()=>{
        if (orders.length > 0) {
            orders.map(order=>(
                order.commandes.map(command=>(
                    setCommande([...commande,{...command}])
                ))
            ))
            orders.map(order=>(
                setClients({...order.client})
            ))
        }
    },[orders])

    useEffect(()=>{
        if (commande.length > 0) {
            console.log(clients);
            commande.map(com=>(
                console.log(com)
            ))
        }
    },[commande])

    return (
       <h1>Hello</h1>
    )
}