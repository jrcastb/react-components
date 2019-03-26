import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import DetalleComentario from './DetalleComentario';//
import AprovacionCard from './AprovacionCard';

const textW = "Soy gay";
const textJ = "I am the master of the universe";
const textN = "Me debes veintemil";
const textA = "Ese Olvis es cule careverga";
//es necesario usar los mismos className para que los estilos sean agregados correctamente. Por ahora
const App = () => {
  return(
    
    <div className ="ui container comments">
      <AprovacionCard>
        <div>
          <h4>Cuidado!</h4>
          <p>¿Estás seguro de hacer esto?</p>
        </div>

      </AprovacionCard>
      <AprovacionCard>
        <DetalleComentario 
          author ="Walter Castillo" 
          time ="Hoy a las 10:00PM" 
          text = {textW}
          avatar = {faker.image.avatar()}
        />
      </AprovacionCard> 
         {/*Agregar un componente dentro de otro en forma de etiqueta*/}
      <AprovacionCard>
        <DetalleComentario 
          author ="José Castillo" 
          time ="Hoy a las 05:00PM" 
          text = {textJ} 
          avatar = {faker.image.avatar()}
        /> 
      </AprovacionCard>
      <AprovacionCard>
        <DetalleComentario 
          author ="Nauris Cordoba" 
          time ="Hoy a las 09:00AM" 
          text = {textN}
          avatar = {faker.image.avatar()}
        /> 
      </AprovacionCard>
      <AprovacionCard>
        <DetalleComentario 
          author ="Andrés Sanchez" 
          time ="Hoy a las 11:00PM" 
          text = {textA}
          avatar = {faker.image.avatar()}
        /> 
        </AprovacionCard>
    </div>
    
    
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))