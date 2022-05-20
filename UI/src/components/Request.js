const API_KEY = ""; 

const requests = {

fetchTrending:`/trending/all/week?api_key-§(API_KEY)&language=en-US`,
fetchNetflix0riginals:`/discover/tv?api_key=$(API_KEY)&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=$(API_KEY)&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=$(API_KEY)&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=$(API_KEY)&with_genres=35`,
fetchRomanceMovies:`/discover/movie?api_key=$(API KEY)&with genres-10749`,
fetchDocumentaries:`/discover/movie?api_key=$(API_KEY)&with_genres=99`,

} 

export default requests;