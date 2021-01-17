import React from "react";
import Popup from 'reactjs-popup';

const Stih = ({stih, glavaBr}) => {
    const buildPodnaslovi = () => {
        return (<div className='podnaslovi'>
            {stih.megunaslov && <div className='megunaslov'>{stih.megunaslov}</div>}
            {stih.podnaslov && <div className='podnaslov'>{stih.podnaslov}</div>}
            {stih.podnaslov_referenca && <div className='podnaslov_referenci'>{stih.podnaslov_referenca}</div>}
        </div>)
    }

    const buildStihFutnoti = () => {
        const futnoti = new Map();
        stih.futnoti.forEach((el, index) => {
            const futnota = (<Popup key={`futnota-${index}`} className='futnota-popup'
                                    trigger={<button className='futnota-broj'>{el.r_br}</button>}
                                    position="right center">
                <div>{el.tekst}</div>
            </Popup>);
            futnoti.set(el.mesto, futnota);
        })
        const elementi = [];
        Array.from(stih.tekst).forEach((el, index) => {
            elementi.push(el);
            if (futnoti.has(index + 1)) {
                elementi.push(futnoti.get(index + 1));
            }
        })
        return elementi;
    }

    const buildStih = () => {
        return (<div className='stih-wrapper'>
            {buildPodnaslovi()}
            <span
                className={`stih-position ${parseInt(stih.r_br) === 1 ? 'glava-broj' : 'stih-broj'}`}>{parseInt(stih.r_br) === 1 ? glavaBr : stih.r_br}</span>
            {stih.futnoti ? buildStihFutnoti() : stih.tekst}
        </div>)
    }


    return buildStih();
}

export default Stih;