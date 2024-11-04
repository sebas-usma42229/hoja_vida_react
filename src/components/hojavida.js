import React from "react";
import "./styles.css";

function Hojavida() {
  return (
    <div
      className="page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/fondo.jpg'})`
      }}
    >
      <div className="row">
        <div className="column">
          <img src="/foto_1.jpg" alt="Foto de perfil" className="foto_perfil" />
          <h1>Sebastian Usma</h1>
          <p><strong>Dirección:</strong> carrera 42a # 11-05, Manizales</p>
          <p><strong>Teléfono:</strong> +57 3227908626</p>
          <p><strong>Email:</strong> usmas835@gmail.com</p>

          <h2>Perfil</h2>
          <p>Tecnólogo en Sistemas con sólida formación técnica y un carisma innato que lo distingue en el ámbito laboral.</p>
          
          <h2>Experiencia Laboral</h2>
          <h3>Once Caldas S.A</h3>
          <p><strong>Posición:</strong> Jefe de Sistemas</p>
          <p><strong>Periodo:</strong> Enero 2013 - Noviembre 2018</p>
        </div>
        
        <div className="column">
          <h3>Quick Ticket S.A.S</h3>
          <p><strong>Posición:</strong> Director de Operaciones</p>
          <p><strong>Periodo:</strong> Enero 2019 - Presente</p>
          
          <h2>Educación</h2>
          <h3>Unitecnica</h3>
          <p><strong>Título:</strong> Técnico Electrónico</p>
          <p><strong>Periodo:</strong> 2010 - 2013</p>

          <h2>Habilidades</h2>
          <ul>
            <li>Liderazgo y Gestión de Equipos</li>
            <li>Pensamiento Estratégico</li>
          </ul>

          <h2>Idiomas</h2>
          <ul>
            <li>Español: Nativo</li>
            <li>Portugués: Intermedio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hojavida;