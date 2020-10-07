import React, {useEffect} from "react";
import TeamMember from "./../../components/TeamMember";
// import destruido from "./../../images/destruido300.JPG";
// import lorenzo from "./../../images/lorenzo300.png";
// import alex from "./../../images/alex300.JPG";
// import Reveal from "react-reveal/Fade";
// import diana from "./../../images/diana.jpeg";
// import mija from "./../../images/mija.jpeg";
// import mauro from "./../../images/mauro.jpeg";
import Plane from "./../../components/plane";
import { useLax } from "use-lax";
import changeCursor from './../../components/ChangeCursor'

let alex = 'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114012/light_Sound/ctigvjibvs5oedog7iux.jpg'
let destruido= 'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114000/light_Sound/twq4xtod5ykixkeakigw.jpg';
let lorenzo= 'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114006/light_Sound/novj9vasiapa0nyebgyh.png';
let diana=  'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114024/light_Sound/j5uhufjt2ejpzwtip5jn.jpg';
let mija=  'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114026/light_Sound/hpc7fb9sa5hpm1acdkfz.jpg';
let mauro=  'https://res.cloudinary.com/dyi84jpkl/image/upload/v1602114033/light_Sound/b846vncoithfscy4gjn3.jpg';

const team = [
  {
    name: "Alexis Flores",
    descripcion: "Director tecnológico y maestro pokémon",
    imagen: alex,
  },
  {
    name: "Alexis Guerrero",
    descripcion: "Director de interactividad y rockstar retirado.",
    imagen: destruido,
  },
  {
    name: "Diana Urquiza",
    descripcion:
      "Project Manager, directora de vinculación y organizadora compulsiva.",
    imagen: diana,
  },
  {
    name: "Lorenzo Torres",
    descripcion: "Director creativo, gurú del front-end y K-pop connoisseur.",
    imagen: lorenzo,
  },
  {
    name: "Mijael Gutiérrez",
    descripcion: "Director general, Ing. acústico y nerd de audio del equipo.",
    imagen: mija,
  },
  {
    name: "Mauro Herrera",
    descripcion:
      "Director artístico, engendro de la deriva académica y no se concentra en una sola cosa.",
    imagen: mauro,
  },
];

export const ConocenosDetalle = () => {
  useLax();

  useEffect(() => {
    window.removeEventListener("scroll", changeCursor);
  },[])

  return (
    <>
      <div className="conocenos-container">
        <Plane />
      </div>
      <div className="lax" data-lax-opacity="0 1, (vh/8) 0">
        <div id="sa-conocenos"></div>
        <div id="sa-flecha"></div>
      </div>

      <div >
        <div className="row mr-0" id="foto-conocenos">
          {team.map((member) => (
            <div key={member.name} className="col-12 col-md-6 col-lg-4 pr-0">
              <TeamMember
                name={member.name}
                descripcion={member.descripcion}
                imagen={member.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
