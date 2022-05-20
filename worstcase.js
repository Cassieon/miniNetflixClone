import { PlayArrow } from "@mui/icons-material/";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import "./worstcase.css";
import React from 'react'

export default function Content({shows}) {
  return (
    <section className="featured">

      <img
        src="https://u2k3a4x7.stackpathcdn.com/wp-content/uploads/2020/01/The-Circle-Chris-2.gif"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c10d93696e76fdf85e28d93/1571318266030-7V092H0SSBP7VEZGXO9E/Main+Circle+Logo.png?format=1000w"
          alt=""
        />
        <div className="buttons">
          <button className="play">
            <PlayArrow style={{fontSize: 30}}/>
            <span>Resume</span>
          </button>
          <button className="more">
            <ThumbUpIcon style={{fontSize: 20}}/>
          </button>
        </div>
        <span className="desc">
          The Circle is a revolving door of players, at least until there are only very few days left. 
        </span>
        <div className="banner-fade"/>
          <div className="show-info">
            <div className="show-score">98% Match</div>
            <div className="show-year">2022</div>
            <div className="number-seasons">Number of Seasons: 4</div>
          </div>
        {/* Episode api */}
      </div>
    </section> 
  );
}