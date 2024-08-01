import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './navbar'
import { FormGestionnaire } from './components/gestionnaire/forms/gestionnnaireForm';
import { useEffect, useState } from 'react';
import { ListGestionnaire } from './components/gestionnaire/lists/gestionnaireList';
import { DetailCommande } from './components/commande/detail';
import { FormClient } from './components/clients/clientForm';
import { ListCommandes } from './components/clients/clientList';
function App() {
  const tableBergers = [
    {
      id: 1,
      price: 19.99,
      name: 'air pod',
      picture: 'images/berger6.jpg',
      description: 'air pod Pro 5'
    },
    {
      id: 2,
      price: 599.95,
      name: 'Iphone',
      picture: 'images/berger2.jpg',
      description: 'Iphone 14 Pro max'
    },
    {
      id: 3,
      name: 'Montre',
      price: 15.90,
      picture: 'images/berger3.jpg',
      description: 'Montre watch'
    },
    {
      id: 4,
      price: 799.95,
      name: 'Macbook Pro',
      picture: 'images/berger5.jpg',
      description: 'Macbook Pro '
    }
  ]

  const [bergers, setBergers] = useState(tableBergers)
  const [commandes, setCommandes] = useState([])
  const [orders, setOrders] = useState([])
  const [berger, setBerger] = useState(null)
  const [count, setCount] = useState(0)
  const [finished,setFinished] = useState(false)
  
  const addcart = (id)=>{
    setCount(preCount => preCount+1)
    const btn =document.querySelector(`#btn${id}`);
    const commande = bergers.filter(berger => berger.id == id)
    setCommandes([...commandes,...commande]);
    btn.setAttribute('disabled','')
  }

  const isFinished = () => {
    return setFinished(true);
  };

  const removeProduct = (id) => {
    setCommandes(prevCommandes => prevCommandes.filter(commande => commande.id !== id));
  };

  const addBerger = (berg) => {
    if (berg.id) {
        setBergers(bergers.map(b => b.id === berg.id ? { ...berg } : b));
    } else {
        const newId = bergers.length > 0 ? Math.max(...bergers.map(b => b.id)) + 1 : 1;
        setBergers([...bergers, { ...berg, id: newId }]);
    }
    setBerger(null);
}


  const handleArchive = (id)=>{
    const filterBergers = bergers.filter(berger => berger.id != id)
    setBergers(filterBergers)
  }

  const handleUpdate = (id)=>{
    const filterBerger = bergers.filter(berger => berger.id == id)
    setBerger(filterBerger);
  }

  

  return (
    <div>
      <NavBar count={count} />
      <div className="App-img" />
      <h1 className='mt-4 text-center'>Bienvenue dans notre catalogue</h1>
      <div className="App-catalog">
        <div className='container mt-4'>
          <div className='row mt-4'>
            {bergers.map((berger, index) => (
              <div key={index} className='col-md-3 mb-4 mt-3'>
                <div className="card  flex-x">
                  <img className="card-img-top" src={berger.picture} alt="Card image cap" width="100%" height="300" />
                  <div className="card-body bg-body-tertiary">
                    <h2 className="card-title text-capitalize">{berger.name}</h2>
                    <h3 className="card-title text-info">{berger.price} € </h3>
                    <p className="card-text">{berger.description}.</p>
                  </div>
                  <button  id={`btn${berger.id}`} className="btn btn-info text-light" onClick={()=>addcart(berger.id)}>Ajouter au panier</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FormGestionnaire addBerger={addBerger} berger={berger} />
      <ListGestionnaire bergers={bergers} handleArchive={handleArchive} handleUpdate={handleUpdate} />
      <DetailCommande 
        commandes={commandes} 
        removeProduct={removeProduct} 
        isFinished={isFinished} 
      />
      <FormClient commandes={commandes} orders={orders} />
      <ListCommandes  orders={orders} />
        
    </div>
  );
}


export default App;
