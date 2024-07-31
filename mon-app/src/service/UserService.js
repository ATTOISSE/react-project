import axios from "axios"


const getUsers = () => axios.get('http://localhost:8000/users');
const deleteUser = (id) => axios.delete('http://localhost:8000/users/'+id);
const updateUser = (id,user) => axios.put('http://localhost:8000/users/'+id,user);
const saveUser = (user)=> axios.post('http://localhost:8000/users',user)
export {getUsers,deleteUser,saveUser,updateUser}