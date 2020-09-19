import React, {useEffect} from 'react'
import changeCursor from '../components/ChangeCursor'

export default function Aviso() {
    useEffect(() => {
        window.removeEventListener("scroll", changeCursor)        
    }, [])
    return (
        <div style={{color:"white"}} className="container-fluid">
            <h1>Aviso de privacidad para la protección de datos personales</h1>
            <p>En términos de lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares,  Light and Sound Disruptive Lab Sociedad por Acciones Simplificada de C.V. (“LSD Lab”), como Responsable del tratamiento de los Datos Personales que recaba, pone a disposición del público en general, así como de sus clientes y usuarios (cada uno referido como “Titular”) el presente Aviso de Privacidad (El “Aviso”).</p>
            <p>La aportación que hagas de tus datos Personales a LSD Lab constituye la aceptación de estos Términos y Condiciones:</p>
            <ol>
                <li>El presente Aviso tiene por objeto la protección de tus datos personales, mediante su tratamiento legítimo, controlado e informado, a efecto de garantizar su privacidad, así como tu derecho a la autodeterminación informativa.</li>
                <li>Conforme al artículo 3, fracción V, de la Ley, se entiende por Datos Personales: Cualquier información concerniente a una persona física identificada o identificable.</li>
                <li>LSD Lab, de conformidad a lo dispuesto por la fracción I del artículo 16 de la Ley, será el Responsable de tu información personal (Datos Personales). LSD Lab hará uso de los datos para los siguientes fines:
                    <ul>
                        <li>a) Crear un perfil del Titular por medio de los datos personales tratados;</li>
                        <li>b) Crear bases de datos, estadísticas, reportes o estudios;</li>
                        <li>c) Transferir los datos personales del Titular recabados por LSD Lab a terceros nacionales o extranjeros, con el fin exclusivo de facilitar el cumplimiento de las finalidades mencionadas en este Aviso, siempre que dichos terceros se obliguen a cumplir con lo estipulado en el presente Aviso y con la legislación aplicable, ya sea nacional o internacional;</li>
                        <li>d)  Comunicar al Titular modificaciones en los bienes o servicios que presta LSD Lab, así como cualquier otra información relacionada con LSD Lab, con el Sitio</li>
                        <li>e) Comunicar información y noticias sobre LSD Lab a través de cartas informativas y/o Newsletter.</li>
                    </ul>
                </li>
                <li>El Titular manifiesta que:
                    <ul>
                        <li>a) El presente Aviso le ha sido dado a conocer por parte de LSD Lab;</li>
                        <li>b) Ha leído, entendido y acordado los términos dispuestos en el presente Aviso, por lo que otorga su consentimiento respecto del tratamiento de sus datos personales;</li>
                        <li>c) Otorga su consentimiento para que LSD Lab trate sus datos personales para las finalidades referidas en la sección anterior, específicamente respecto de la finalidad señalada en el número 3, fracción c), relacionado con la transferencia de sus datos; y</li>
                        <li>d) La permanencia o el uso del Sitio constituyen confirmaciones tácitas de su consentimiento a lo dispuesto en el presente Aviso. El Titular deberá abstenerse de continuar utilizando el Sitio en caso de que no consienta con las disposiciones establecidas en el presente Aviso.</li>
                    </ul>
                    <br/>
                    <p>LSD Lab asume que la información proporcionada por el Titular le pertenece a este último. En caso de que no sea así, el Titular deberá informar dicha circunstancia inmediatamente a LSD Lab, a través del envío de un correo electrónico a contacto@lsdlab.com.mx, el cual deberá contener su información de contacto y cualquier otra información que permita dar respuesta a dicho informe, absteniéndose de proporcionar información adicional de la que no sea titular o de la que no tenga autorización para transferir.</p>
                    <p>El Titular podrá revocar el consentimiento antes referido en todo momento. Para revocar el consentimiento proporcionado, el Titular deberá comunicar dicha circunstancia a LSD Lab por medio de un correo electrónico enviado a contacto@lsdlab.com.mx, indicando las causas que lo motivan a comunicar la revocación, así como la información que permita a LSD Lab responder y dar seguimiento a dicha revocación.</p>
                    <p>En caso de que el Titular desee limitar el uso o la divulgación de alguno de sus datos personales, podrá en cualquier momento enviar la manifestación de dicha limitación a través de un correo electrónico dirigido a contacto@lsdlab.com.mx, en el cual incluirá los datos personales cuyo tratamiento desea limitar, los motivos por los cuales desea limitarlos, así como la información que permita a LSD Lab dar seguimiento a dicha solicitud. En caso de ser procedente la solicitud del Titular, LSD Lab registrará al Titular en la lista de exclusión que tendrá elaborada para tal efecto.</p>
                </li>
                <li>La temporalidad del manejo de tus Datos Personales será indefinida a partir de la fecha en que nos los proporciones.</li>
                <li>LSD Lab, como responsable del tratamiento de tus datos personales, está obligada a cumplir con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad tutelados en la Ley; por tal motivo con fundamento en los artículos 13 y 14 de la Ley, LSD Lab se compromete a tratar tu información con normas de confidencialidad y seguridad administrativa.</li>
                <li>En términos de lo establecido por el artículo 22 de la Ley, tienes derecho en cualquier momento a ejercer tus derechos de acceso, rectificación, cancelación y oposición al tratamiento de tus datos personales.</li>
                <li>Te sugerimos conocer y analizar el contenido de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares pues pueden generarse cambios normativos a los que estamos sujetos.</li>
                <li>LSD Lab podrá utilizar cookies durante la prestación de servicios del sitio web. Las cookies son ficheros físicos de información personal alojados en el propio terminal del usuario. El usuario tiene la posibilidad de configurar su programa navegador de manera que se impida la creación de archivos cookie o se advierta de la misma.</li>
                <li>Si opta a abandonar nuestro sitio web a través de enlaces a sitios web no pertenecientes a nuestra entidad, LSD Lab no se hará responsable de las políticas de privacidad de dichos sitios web ni de las cookies que éstos puedan almacenar en el ordenador del usuario.</li>
            </ol>
        </div>
    )
}
