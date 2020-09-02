import React from 'react'
import ReactPlayer from 'react-player';

export const ShowreelDetalle = () => {
    return (
        <div className='player-wrapper col-12'>
          <ReactPlayer
            className='react-player'
            url="https://player.vimeo.com/video/189176993"
            width='100%'
            height='100%'
            controls={true}
          />
        </div>
        );  
}
