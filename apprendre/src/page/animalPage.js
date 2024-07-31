
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import AnimalForm from '../components/animal/animalForm';
import AnimalList from '../components/animal/animalList';
import { AnimalSearch } from '../components/animal/animalSearch';
function AnimalPage() {
const [races,setRaces] = useState([]);
const [edit,setEdit] = useState(null);
  useEffect(()=>{
    const init = [
      {
        id : 1,
        libelle : 'Lion',
        color : 'jaune',
        taille : 20
      },
      {
        id : 2,
        libelle : 'Tigre',
        color : 'rouge',
        taille : 10
      }
    ];
    setRaces(init)
  },[])

  const addRace = (Race) => {
    if (edit) {
      setRaces(races.map(r => r.id === edit.id ? { ...Race} : r));
      setEdit(null);
    }else{
      setRaces([...races, { ...Race, id: races.length + 1 }]);
    }
  };
  const removeRace = (id)=>{
    const updateRace = [...races]
    setRaces(updateRace.filter(Race=>Race.id !=  id))
}

const handleEdit = (id) => {
  const RaceToEdit = races.find(Race => Race.id === id);
  setEdit(RaceToEdit);
};

const [search,setSearch] = useState('')
  const visibleRace = races.filter(race =>{
      if(search && !race.libelle.toLowerCase().includes(search.toLowerCase())){
        return false
      }
      return true
    })
  return (
    <div className="container">
      <AnimalSearch  search={search} onSearchChange={setSearch} />
      <AnimalList racesList={visibleRace} removeRace={removeRace} handleEdit={handleEdit} />
      <AnimalForm addRace={addRace} editRace={edit} />
    </div>
    
  );
}

export default AnimalPage;

