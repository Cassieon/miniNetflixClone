import React, { useEffect } from "react"; 
import './content.css'
import axios from './axios'
import reqests from './Request'

function newContent () {

    const [movie, setMovie] = useState([]); 

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(reqests.fetchNetflix0riginals)
            setMovie(
                request.data.results [
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            )
            return request
        }fetchData();
    }, [])

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmbd.org/t/p/original/${movie?.backdrop_path}") `,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">Lists</button>
                </div>
                <h1 className="banner-description">This is description</h1>
            </div>
            <div className="banner-fade"/>
        </header>
    )
} 

export default newContent;