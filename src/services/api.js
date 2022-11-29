import axios from 'axios';

const api = axios.create({
 baseUrl: "https://api.themoviedb.org/3/movie/550?api_key=6b24507609c0088f6662b28444b73ba7",
}
)
export default api