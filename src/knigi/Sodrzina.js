import React from "react";

function Sodrzina({biblija, setKniga, kniga}) {

let starZavet1 = [];
let starZavet2 = [];
let novZavet = [];

  const buildLink = (el,index) => {
    return (<div className='sodrzina-link'
        key={`sodrzina_${el.meta_fajl}`}>
            <button className={`sodrzina-button ${kniga && kniga.kratko_ime === el.kratko_ime ? 'sodrzina-aktivna' : ''}`} onClick={setKniga} kniga={index}>
                {el.kratko_ime}
            </button>
    </div>);
  }
  const buildLinks = () => biblija.forEach((el,index) => {
    if(index < 25){
        starZavet1.push(buildLink(el,index));
        } else if (index >= 25 && index < 50) {
                starZavet2.push(buildLink(el,index));
    } else {
        novZavet.push(buildLink(el,index));
    }
  });

  const buildSodrzina = () => {
     buildLinks();
     return (<div className='sodrzina-wrapper'>
       <span className='sodrzina'>
       <span className='sodrzina-naslov'> Стар Завет </span>
       <span className='sodrzina'>{starZavet1}</span>
       <span className='sodrzina'>{starZavet2}</span>
       </span>
       <span className='sodrzina'>
       <span className='sodrzina-naslov'> Нов Завет </span>
       <span className='sodrzina'>{novZavet}</span>
       </span>
     </div>)
  }

  return buildSodrzina();
}

export default Sodrzina;