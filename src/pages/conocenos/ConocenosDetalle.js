import React from 'react'
import TeamMember from '../../components/TeamMember'
import destruido from '../../images/destruido300.JPG'
import lorenzo from '../../images/lorenzo300.png'
import alex from '../../images/alex300.JPG'
// import Reveal from "react-reveal/Fade";
import diana from '../../images/diana.jpeg'
import mija from '../../images/mija.jpeg'
import mauro from '../../images/mauro.jpeg'
import Plane from '../../components/plane'

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
        <>
            <div className="conocenos-container" >
                	
                <Plane/>
                        
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
        
        </>
            
        
        )  
    }