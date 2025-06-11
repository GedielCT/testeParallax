import React from 'react';
import 'css/cssEspecifico/usarFicha.css'; // Importa o CSS separado

const Card = ({ nome, habilidade, checked }) => {
  return (
    <div className="card">
      <div className="row flex-container">
        <div className="fakeimg inputs" aria-label="Imagem de exemplo">Image</div>

        <div className="right-content">
          <div className="inputs">
            <label htmlFor={`nome-${nome}`}>Nome:</label>
            <input
              id={`nome-${nome}`}
              type="text"
              className="input-text"
              defaultValue={nome}
            />
          </div>

          <div className="inputs">
            <label htmlFor={`habilidade-${nome}`}>Habilidade:</label>
            <input
              id={`habilidade-${nome}`}
              type="text"
              className="input-text"
              defaultValue={habilidade}
            />
          </div>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" defaultChecked={checked} />
        </div>
      </div>
    </div>
  );
};

export default Card;