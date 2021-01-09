import React from "react";

export default function Stih({stih, glavaBr}) {
    const buildPodnaslovi = () => {
        return (<div className='podnaslovi'>
            {stih.megunaslov && <div className='megunaslov'>{stih.megunaslov}</div>}
            {stih.podnaslov && <div className='podnaslov'>{stih.podnaslov}</div>}
            {stih.podnaslov_referenca && <div className='podnaslov_referenci'>{stih.podnaslov_referenca}</div>}
        </div>)
    }

  const buildStih = () => {
   return (<div className='stih-wrapper'>
    {buildPodnaslovi()}
    <span className={stih.r_br === 1 ? 'glava-broj' : 'stih-broj'}>{stih.r_br === 1 ? glavaBr : stih.r_br}</span>
    {stih.tekst}
   </div>)
  }


  return buildStih();
}