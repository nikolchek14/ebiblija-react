import React, {useRef, useEffect} from "react";
import Kniga from './Kniga.js';

export default function ReferencaPopup({stih, referenca, kniga, biblija, glava, setRefkniga, setGlava, setStih, setReferenca, setOpen}) {
  const glaviRef = useRef([]);
  useEffect(() => {
     console.warn(glaviRef.current)
     const meta_part = referenca.meta_link.substring(referenca.meta_link.indexOf('#')+1);
     const refGlava = parseInt(meta_part.substring(meta_part.indexOf('g')+1,meta_part.indexOf('s')));
     const refStih = parseInt(meta_part.substring(meta_part.indexOf('s')+1));
     glaviRef.current[refGlava-1].children[0].children[refStih-1].scrollIntoView();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glaviRef.current]);

    const refClick = (ref) => {
        setRefkniga(kniga);
        setGlava(glava);
        setStih(stih);
        setReferenca(ref);
        setOpen(true);
    }

  const buildReferenci = () => stih.referenci.map((el, index) => {
      return (<div key={`referenci-${index}`}>
        <span className={`ref-popup-ref ${el.referenca === referenca.referenca ? 'ref-popup-aktivno' : null}`} onClick={() => refClick(el)}>
            {el.referenca}
        </span>
      </div>);
  });

  const buildRefKniga = () => {
      const refKniga = biblija.find((el) => el.meta_fajl === referenca.meta_link.substring(0, referenca.meta_link.indexOf('#')));
      return <Kniga key={refKniga.meta_fajl} kniga={refKniga} biblija={biblija} glaviRef={glaviRef}
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