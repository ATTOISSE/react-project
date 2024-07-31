
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import RaceForm from '../components/race/raceForm';
import RaceList from '../components/race/raceList';
import { RaceSearch } from '../components/race/raceSearch';
function RacePage() {
const [races,setRaces] = useState([]);
  const [editRace,setEditRace] = useState(null);
  useEffect(()=>{
    const init = [
      {
        id : 1,
        libelle : 'race 1',
      },
      {
        id : 2,
        libelle : 'race 2',
      }
    ];
    setRaces(init)
  },[])

  const addRace = (Race) => {
    if (editRace) {
      setRaces(races.map(r => r.id === editRace.id ? { ...Race} : r));
      setEditRace(null);
    }
    setRaces([...races, { ...Race, id: races.length + 1 }]);
  };
  const removeRace = (id)=>{
    const updateRace = [...races]
    setRaces(updateRace.filter(Race=>Race.id !=  id))
}

const handleEdit = (id) => {
  const RaceToEdit = races.find(Race => Race.id === id);
  setEditRace(RaceToEdit);
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
      <RaceSearch  search={search} onSearchChange={setSearch} />
      <RaceList racesList={visibleRace} removeRace={removeRace} handleEdit={handleEdit} />
      <RaceForm addRace={addRace} editRace={editRace} />
    </div>
    
  );
}

export default RacePage;

