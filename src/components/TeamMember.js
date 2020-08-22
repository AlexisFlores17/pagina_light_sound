import React from 'react'


export default function TeamMember(props) {
    const {name, descripcion, imagen} = props
    return (
        <div className="teamMember-container">
            <div>
            <img className="rounded-circle" src={imagen} alt="TeamMember-image"/>
            </div>
            <div className="name">{name}</div>
            <div className="descripcion">{descripcion}</div>
        </div>
        
       
       
    )
}


