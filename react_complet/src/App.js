import 'bootstrap/dist/css/bootstrap.min.css'
import { Input } from './components/form/input'
import { useEffect, useState } from 'react';
import { Button } from './components/form/btn';
function App() {
  const tables = [
    {
      id:1,
      name:'Tache 1'
    },
    {
      id:2,
      name:'Tache 2'
    }
  ];
  const [task,setTask] = useState('');
  const [editTask,setEditTask] = useState(null);
  const [tasks,setTasks] = useState(tables);

  const handleAdd = (e)=>{
    e.preventDefault();
    if (editTask) {
      //
    }
    if (task.trim() != '') {
      const newTask = {id:tasks.length+1,name:task}
      setTasks([...tasks,newTask])
      setTask('')
    }
  }
  const handleEdit = (id)=>{
    setEditTask(tasks.find((t)=> t.id === id));
  }
  
  useEffect(()=>{
    if (editTask) {
      setTask(editTask.name);
    }
  },[editTask])

  const handleRemove = (id)=>{
    setTasks(tasks.filter((t) =>t.id != id))
  }

  return(
    <div className='container mt-3'>
      <Input name='name' value={editTask != null ? editTask.name : task} placeholder="Task" onChange={setTask}/>
      <Button value="Ajouter" color='primary' onclick={handleAdd}/>
      <table className='table table-bordered mt-3'>
        <thead>
          <tr >
            <th>N°</th>
            <th>Tache</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((t)=>(
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td> 
                  <Button value='Modifier' color='warning' onclick={()=>handleEdit(t.id)}/> &nbsp;
                  <Button value='Supprimer' color='danger' onclick={()=>handleRemove(t.id)}/> 
                </td>
              </tr>
            ))
          }
        </tbody>
    </table>

    </div>
  )
}

export default App