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
                <div className="magic" ref={el => magicEl = el}>
                    <div id="texto">Conócenos</div>
                </div>
                <h1>El equipo</h1>
                <p>Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</p>
            </div>            
        </div>

    )
}
