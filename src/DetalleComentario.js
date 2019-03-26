import React from 'react';

//agrego props en el argumento de la función para que retorne las propiedades del index.js en objetos
const DetalleComentario = (props) => {
  
  return (
    <div className = "comment">
        <a href ="/" className = "avatar">
          <img alt="avatar" src= {props.avatar}/>
        </a>
        <div className = "content">
          <a href = "/" className ="author">
            {props.author}
          </a>
          <div className="metadata" >
            <span className ="date"> {props.time} </span>
          </div>
          <div className ="text"> {props.text} </div>
        </div>
      </div>
  );
};

export default DetalleComentario;//Esto permite anidar