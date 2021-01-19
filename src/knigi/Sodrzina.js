import React from "react";
import {ReactComponent as RightIcon} from '../icons/chevron-right.svg'

function Sodrzina({biblija, setKniga, kniga, openNav}) {

    let starZavet = [];
    let novZavet = [];

    const buildLink = (el, index) => {
        return (<div className='sodrzina-link'
                     key={`sodrzina_${el.meta_fajl}`} >
            <div className={`sodrzina-button ${kniga && kniga.kratko_ime === el.kratko_ime ? 'sodrzina-aktivna' : ''}`}>
                <span className='sodrzina-dugme' onClick={() => setKniga(biblija[index])}
                      key={index}>{el.kratko_ime}</span>
                <RightIcon onClick={() => openNav(biblija[index])}/>
            </div>
        </div>);
    }
    const buildLinks = () => biblija.forEach((el, index) => {
        if (index < 50) {
            starZavet.push(buildLink(el, index));
        } else {
            novZavet.push(buildLink(el, index));
        }
    });

    const buildSodrzina = () => {
        buildLinks();
        return (<div className='sodrzina-wrapper'>
       <span className='sodrzina'>
       <span className='sodrzina-naslov'> Стар Завет </span>
       <span className='sodrzina-list' style={{direction: "rtl"}}>{starZavet}</span>
       </span>
            <span className='sodrzina'>
       <span className='sodrzina-naslov'> Нов Завет </span>
       <span className='sodrzina-list'>{novZavet}</span>
       </span>
        </div>)
    }

    return buildSodrzina();
}

export default Sodrzina;