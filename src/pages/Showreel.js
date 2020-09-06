import React from 'react'
// import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player';

// function scrollTop () {

//     window.scroll(0,0);

// }

export const Showreel = () => {
    return (
        <div className='showreel-container'>
          <div className="figuras-showreel">
            <div className="circulo1"><h1 className="texto-showreel">Showreel</h1></div>
            <div className="circulo2"></div>
          </div>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url="https://vimeo.com/454591343"
              width='100vw'
              height='100vh'
              controls={true}
            />
          </div>
        </div>
    )
}
