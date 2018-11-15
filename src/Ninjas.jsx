import React, { Component } from 'react';

const Ninjas = (props) => {
    const { ninjas } = props;
    const ninjaList = ninjas.map( ninja => {
        return ninja.age > 28 ? (
            <div key={ninja.id} className="ninja">
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        ) : null
    });

    return ( 
        <div className="ninja-list">
            { ninjaList }
        </div>
        );
}


export default Ninjas;