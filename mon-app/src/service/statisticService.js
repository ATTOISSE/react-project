import axios from "axios"

const getStat = ()=> axios.get('http://localhost:8000/statistic')

export {getStat}