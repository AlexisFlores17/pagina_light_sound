import React, {useEffect, useRef} from 'react'




export const Conocenos = () => {
    let magicEl = useRef(null)
    useEffect(() => {
        var magic = magicEl
        var magicWHalf = magic.offsetWidth / 2
        
        document.body.onmousemove = function(e) {
          magic.style.setProperty("left",  `${e.clientX - magicWHalf}px` );
          magic.style.setProperty("top", `${e.clientY - magicWHalf - 200}px`);
        }
    
      },[])
    return (
        <div className='conocenos-container-home'>
            <div className="scene">
                <div className="magic lax" ref={el => magicEl = el} data-lax-opacity="(vh*1.5) 0,(vh*2) 1 , (vh*2.5) 1, (vh*3) 0 ">
                    <div id="texto" className="lax" data-lax-opacity="-100px 0, 0 1, (-vh/2) 0" data-lax-anchor=".conocenos-container-home">Conócenos</div>
                </div>
                <h1>El equipo</h1>
                <p>Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</p>
            </div>            
        </div>

    )
}
