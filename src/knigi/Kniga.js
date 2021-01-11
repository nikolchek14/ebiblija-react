import React from "react";
import Glava from './Glava.js';
import Meni from './Meni.js';

export default function Kniga({kniga, sodrzina, setRefkniga, setGlava, setStih, setReferenca, setOpen, glaviRef}) {
  const buildMeni = () => <Meni kniga={kniga} sodrzina={sodrzina} />
  const buildVoved = () => kniga.voved.map((el, index) => <span className='voved-linija' key={`voved-${index}`}>{el}</span>)
  const buildGlavi = () => {
    while(glaviRef && glaviRef.current.length > 0) {glaviRef.current.shift()};
    return kniga.glavi.map((el, index) => {
        const getRef = glaviRef ? (element) => (glaviRef.current.push(element)) : null;
        return (<Glava glava={el} key={`glava-${index}`} kniga={kniga.kratko_ime} ref={getRef}
            setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih} setOpen={setOpen}/>)
    });
  }

  const buildKniga = () => {
    return (<div>
        {sodrzina && buildMeni()}
        {sodrzina && <div className='voved'>
            <h3 className='voved-naslov'>{kniga.celo_ime}</h3>
            <h4 className='voved-naslov'>Вовед</h4>
            {buildVoved()}
        </div>}
        {buildGlavi()}
    </div>);
  }

  return buildKniga();
}