import React from 'react'
import {Link} from 'react-router-dom'

export const Conocenos = () => {
    return (
            <div className='conocenos-container-home'>
                <div>
                    <h1>Titulo conocenos</h1>
                    <p>Consectetur et excepteur ullamco consequat. Deserunt duis id duis amet non non sint. Fugiat pariatur ullamco eiusmod esse sit anim ea reprehenderit commodo anim et ipsum sunt est. Ex laborum ad nisi mollit irure.</p>
                </div>
                <Link to="/Conocenos/info">Ver mas</Link>
            </div>

    )
}
