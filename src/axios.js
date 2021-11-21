import axioxs from "axios";

// base url to make requests to the movie databases 
const instance = axioxs.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance;