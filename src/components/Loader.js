import React, {useEffect} from 'react'
import './../styles/components/_loader.scss';


export default function Loader() {

    useEffect(() => {

        window.onload = function(){
            document.querySelector(".loader").style.opacity = "0";
            setTimeout(function(){
              document.querySelector(".loader").style.display = "none";
            },1000);
        }
      
    },[])


    return (
        <div>
            <div class="loader"></div>
        </div>
    )
}
