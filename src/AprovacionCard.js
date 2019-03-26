import React from 'react';

const AprovacionCard = (props) => {
   //console.log(props.children);//props.children me permite acceder a las propiedades del hijo ubicado dentro de esta etiqueta de jsx
  return(
    <div className ="ui card" style={{marginTop: '10px'}}>
        <div className ="content" >
            {props.children}
            {/* <img className ="right floated mini ui image" alt ="avatar" src ={props.avatar}></img> */}
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Aprovar</div>
                <div className="ui basic red button">Declinar</div>
            </div>
        </div>
    </div>
  );
};

export default AprovacionCard;