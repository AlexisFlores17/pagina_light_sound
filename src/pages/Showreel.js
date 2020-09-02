import React from 'react'
// import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player';

// function scrollTop () {

//     window.scroll(0,0);

// }

export const Showreel = () => {
    return (
        <div className='showreel-container'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url="https://player.vimeo.com/video/189176993"
            width='100vw'
            height='100vh'
            controls={true}
          />
        </div>
        </div>
    )
}
