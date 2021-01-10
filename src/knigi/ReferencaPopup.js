import React from "react";
import Kniga from './Kniga.js';

export default function ReferencaPopup({stih, referenca, kniga, biblija, glava, setRefkniga, setGlava, setStih, setReferenca, setOpen}) {
  const buildReferenci = () => stih.referenci.map((el, index) => {
      return (<div>
        <span className={`ref-popup-ref ${el.referenca === referenca.referenca ? 'ref-popup-aktivno' : null}`} >{el.referenca}</span>
      </div>);
  });

  const buildRefKniga = () => {
      const refKniga = biblija.find((el) => el.meta_fajl === referenca.meta_link.substring(0, referenca.meta_link.indexOf('#')));
      return <Kniga key={refKniga.meta_fajl} kniga={refKniga} biblija={biblija}
        setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih} setOpen={setOpen} />
  };

  return (<div className='ref-popup'>
    <span className='ref-popup-levo'>
        <span className='ref-popup-stih'>
            <div className='ref-popup-kniga'>{kniga} {glava},{stih.r_br}</div>
            {stih.tekst}
        </span>
        <span className='ref-popup-refs'>{buildReferenci()}</span>
    </span>
    <span className='ref-popup-desno'>
        {buildRefKniga()}
    </span>
  </div>);
}