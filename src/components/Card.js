import React from 'react';
import Styles from './card.module.css';

const Card = (props)=>{
    const border={
        borderTop:`5px solid ${props.highLightColor}`,
    };
    return(
        <div className={Styles.card} style={border}>
            <h1>{props.title} </h1>
            <p>{props.description}</p>
            <img src={props.icon} />
        </div>
    )
}

export default Card;