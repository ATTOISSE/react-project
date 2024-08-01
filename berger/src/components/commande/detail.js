import { useEffect, useState } from "react"

export function DetailCommande({ commandes, removeProduct }) {
    const [orders,setOrders] = useState([])
    const [finished,setFinished] = useState(false)
    const [quantites, setQuantites] = useState(
        commandes.reduce((acc, commande) => {
            acc[commande.id] = 1;
            return acc;
        }, {})
    );

    // useEffect(() => {
    //     if (finished) {
    //         setOrders([...orders,{...commandes,etat:finished}])
    //     }
    // }, [finished]);

    // useEffect(() => {
    //     if (orders.length > 0) {
    //         console.log(orders);
    //     }
    // }, [orders]);

    const incrementQte = (id) => {
        setQuantites(prevQuantites => ({
            ...prevQuantites,
            [id]: (prevQuantites[id] || 1) + 1
        }));
    };

    const decrementQte = (id) => {
        setQuantites(prevQuantites => ({
            ...prevQuantites,
            [id]: Math.max((prevQuantites[id] || 1) - 1, 1) // Empêche la quantité de descendre en dessous de 1
        }));
    };

    useEffect(()=>{
        const thead = document.getElementById('thead')
        if (commandes.length == 0)  
            thead.setAttribute('hidden','')
        else
            thead.removeAttribute('hidden')
    },[commandes])

    const isFinish = ()=>{
        setFinished(true) 
    }

    return (
        <div className="container mt-4">
            <table className="table table-responsive">
                <thead >
                    <tr key="" id="thead">
                        <th>N°</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Quantité</th>
                        <th>Montant</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {commandes.length > 0 ? (

                        commandes.map((commande, index) => (
                            <tr key={index} >
                                <td>{commande.id}</td>
                                <td>{commande.name}</td>
                                <td>{commande.price}</td>
                                <td>{commande.description}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => decrementQte(commande.id)}>-</button>
                                    <input type="text" className="mx-1 App-input" min="1" value={quantites[commande.id] || 1} readOnly />
                                    <button className="btn btn-primary" onClick={() => incrementQte(commande.id)}>+</button>
                                </td>
                                <td>{((quantites[commande.id] || 1) * commande.price).toFixed(2)} €</td>
                                <td>
                                    <button className="btn btn-outline-danger mx-2" onClick={() => removeProduct(commande.id)}><i>Retirer</i> </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr key="">
                            <td colSpan="7" className="alert alert-info">Aucune commande effectuée</td>
                        </tr>
                    )}

                    {commandes.length > 0 && (
                        <tr>
                            <th colSpan="2" className="text-center">Total</th>
                            <th colSpan="3" className="text-center">{(commandes.reduce((total, commande) => total + (quantites[commande.id] || 1) * commande.price, 0)).toFixed(2)} €
                            </th>
                            <td>
                                <button className={`btn btn-outline-${finished ? 'success' : 'secondary'} mx-2`} onClick={isFinish}><i>{finished ? 'Terminer' : 'En cours'}</i> </button>
                            </td>
                            <td><a href="" className="btn btn-primary">Commander</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}