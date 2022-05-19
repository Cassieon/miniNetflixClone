
// import React, { Component, useEffect, useState } from 'react'
// import './Row.css'
// import { useNavigate } from "react-router-dom";

// const fetchURL = 'https://imdb-api.com/en/API/Title/k_1234567/tt1832382';

// const img_base = "https://image.tmdb.org/t/p/original"

// class Content extends Component {

//     constructor() {
//         super()
        
//         this.state = {
//             setMovies: []
        
//         }
//     }
//     //({ title, fetchURL, isLargeRow }) {
//     //const navigate = useNavigate();
//     //const [movies, setMovies] = useState([]);
    
//     componentDidMount() {
//         fetch(fetchURL)
//         .then(response => response.json())
//         .then(result => {
//             this.setState({
//                 setMovies : result
//             })
//         })
//     }
//     render () {
//     return (
//         <div className="row">
//             <h2>{title}</h2>
//             <div className="row_posters">
//                 {movies.map(movie => (
//                     <img
//                         onClick={() => navigate({ pathname: '/details', state: movie })}
//                         key={movie.id}
//                         className={`row_poster ${isLargeRow && "row_poster_large"}`} src={`${img_base}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
//                 ))}
//             </div>
//         </div>
//         )
//     }
// }

// export default Content;