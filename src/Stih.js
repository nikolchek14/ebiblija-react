import React from "react";

export default function Stih({stih}) {
    const buildReferenci = (stih) => stih.referenci.map((el, index) => {
        return (<span key={index}>
            {el.referenca}
        </span>);
    });

    const buildPodnaslovi = () => {
        return (<div>
            {stih.megunaslov && <div><b>{stih.megunaslov}</b></div>}
            {stih.podnaslov && <div><b>{stih.podnaslov}</b></div>}
            {stih.podnaslov_referenca && <div><b>{stih.podnaslov_referenca}</b></div>}
        </div>)
    }

  const buildStih = () => {
   return (<div>
    {buildPodnaslovi()}
    <span>{stih.r_br}</span>
    {stih.tekst}
    {stih.referenci && <div>{buildReferenci(stih)}</div>}
   </div>)
  }


  return buildStih();
}