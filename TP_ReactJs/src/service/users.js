import axios from "axios";
const getUsers = () => axios.get("http://localhost:3000/users")
const deleteUsers = (id) => axios.delete("http://localhost:3000/users"+id)

export {getUsers,deleteUsers}