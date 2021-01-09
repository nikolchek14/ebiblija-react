import React from "react";
import Stih from './Stih.js';
import Referenci from './Referenci.js';

export default function Glava({glava}) {
    //glava.stihovi.map((el, index) => <Stih stih={el} />);
    const buildGlavi = () => {
        const stihovi = [];
        const referenci = [];
        glava.stihovi.forEach((el, index) => {
            stihovi.push(<Stih stih={el} glavaBr={glava.r_br} />);
            el.referenci && referenci.push(<Referenci stih={el} />);
        });
        return <div className='glava'>
            <span className='glava-tekst'>{stihovi}</span>
            <span className='glava-referenci'>{referenci}</span>
        </div>;
    }

    return buildGlavi();
}