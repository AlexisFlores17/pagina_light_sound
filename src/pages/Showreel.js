import React from 'react'
import {Link} from 'react-router-dom'

function scrollTop () {

    window.scroll(0,0);

}

export const Showreel = () => {
    return (
        <div className='showreel-container'>
            <div>
                <h1>Titulo Showreel</h1>
                <p>Consectetur et excepteur ullamco consequat. Deserunt duis id duis amet non non sint. Fugiat pariatur ullamco eiusmod esse sit anim ea reprehenderit commodo anim et ipsum sunt est. Ex laborum ad nisi mollit irure.</p>
            </div>
            <Link to="/Showreel/info" onClick={scrollTop}>Ver mas</Link>
        </div>
    )
}
