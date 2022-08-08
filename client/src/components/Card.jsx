import React from 'react';

export default function Card({name, image}){
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} width="200px" height="250px" />
        </div>
    );
};