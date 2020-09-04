import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'



export const Conocenos = () => {
    let magicEl = useRef(null)

    // let cursor = useRef(null)
    // let follower = useRef(null)

    useEffect(() => {
        var magic = magicEl
        var magicWHalf = magic.offsetWidth / 2
        
        


        let posX = 0
        let posY = 0
    
        let mouseX = 0
        let mouseY = 0
        document.body.onmousemove = function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // magic.style.setProperty("left",  `${e.clientX - magicWHalf}px` );
            // magic.style.setProperty("top", `${e.clientY - magicWHalf - 200}px`);
            
        }

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function() {
              posX += (mouseX - posX) / 9;
              posY += (mouseY - posY) / 9;
          
            //   gsap.set(follower, {
            //       css: {
            //       left: posX - 80,
            //       top: posY - 80
            //       }
            //   });
          
              gsap.set(magic, {
                  css: {
                  left: mouseX - magicWHalf,
                  top: mouseY- magicWHalf
                  }
              });
            }
            
          });


    }, [])
    
    return (
        <div className='conocenos-container-home'>
            <div className="scene">
                <div className="lax" data-lax-opacity="(vh*1.5) 0,(vh*1.8) 1 , (vh*2.5) 1, (vh*3) 0 ">
                    
                    <div className="magic" ref={el => magicEl = el} >
                        <div id="texto" >Conócenos</div>
                    </div>
                </div>

                <div className="conocenos-texto col-12">
                    <h1 className="lax titulo-conocenos" data-lax-translate-y="0 0vh, vh vh, (vh*2) 0 " data-lax-opacity=" (vh*2) 1 , (vh*3) 0 ">El equipo</h1>
                    <p className="lax informacion-conocenos" data-lax-translate-y="0 0vh, vh vh, (vh*2) 0 " data-lax-opacity=" (vh*2) 1 , (vh*3) 0 ">Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</p>
                </div>
            </div>            
        </div>

    )
}
