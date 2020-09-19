import React from 'react'
import { Link } from "react-router-dom";

export const FooterMain = () => {
    return (
        <footer id="footer-main">                
            <div className="copyright-main glowInf" id="copy-animacion-main">© LSD LAB {new Date().getFullYear()}</div>
            <Link to="/Aviso">Aviso de Privacidad</Link>

        </footer>
        
    )
}
