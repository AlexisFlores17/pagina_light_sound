import React from 'react'
import TeamMember from '../../components/TeamMember'
import destruido from '../../images/destruido300.JPG'
import lorenzo from '../../images/lorenzo300.png'
import alex from '../../images/alex300.JPG'
import Reveal from "react-reveal/Fade";
import diana from '../../images/diana.jpeg'
import mija from '../../images/mija.jpeg'
import mauro from '../../images/mauro.jpeg'
import equipo from '../../images/equipo.jpg'

const team = [
	{name: "Alexis Flores", descripcion: "Director tecnológico y maestro pokémon", imagen: alex},
	{name: "Alexis Guerrero", descripcion: "Director de interactividad y rockstar retirado.", imagen: destruido},
	{name: "Diana Urquiza", descripcion: "Project Manager, directora de vinculación y organizadora compulsiva.", imagen: diana},
	{name: "Lorenzo Torres", descripcion: "Director creativo, gurú del front-end y K-pop connoisseur.", imagen: lorenzo},	
	{name: "Mijael Gutiérrez", descripcion: "Director general, Ing. acústico y nerd de audio del equipo.", imagen: mija},
	{name: "Mauro Herrera", descripcion: "Director artístico, engendro de la deriva académica y no se concentra en una sola cosa.", imagen: mauro},
	
]

export const ConocenosDetalle = () => {
    return (
        <Reveal effect="fadeindown" duration={2000}>
            <div className="conocenos-container" >
                <div className='conocenos-div-img'>
                    <img className='conocenos-img img-fluid' src ={equipo} alt='equipo' />
                </div>	
                <div className="content">
                    <div className="description">Somos un equipo de creadores, pensadores, exploradores y nerds tecnológicos. Nos enfocamos en nuestros proyectos con curiosidad y experimentación, usando todo lo que aprendemos para diseñar experiencias que conecten con personas como tú.</div>			
                    <h2>Filosofía</h2>		
                    <p>"Sólo sabemos que no sabemos nada"</p>		
                    <h2>Misión</h2>		
                    <p>Contribuir como agente de cambio e innovación con soluciones tecnológicas para las industrias creativas</p>				
                </div>
                        
            </div>
    
            <div className="container">
                <div className="row" id="foto-conocenos">			
                    {team.map((member) =>
                        <div key={member.name} className="col-12 col-md-6 col-lg-4">
                            <TeamMember name={member.name} descripcion={member.descripcion} imagen = {member.imagen}/>
                        </div>
                    )}
                    
                </div>
                
            </div>
        
        </Reveal>
            
        
        )  
    }