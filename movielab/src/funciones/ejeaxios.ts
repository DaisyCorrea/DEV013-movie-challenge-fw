import axios from "axios";

const allMovies = async () => {
    const peticion = await axios.get ('https://api.themoviedb.org/3/discover/movie')
    console.log(peticion )
}

export {
    allMovies
}