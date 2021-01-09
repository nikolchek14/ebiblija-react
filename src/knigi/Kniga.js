import React from "react";
import Glava from './Glava.js';
import Meni from './Meni.js';

export default function Kniga({kniga, sodrzina}) {
  const buildMeni = () => <Meni kniga={kniga} sodrzina={sodrzina} />
  const buildVoved = () => kniga.voved.map((el, index) => <span className='voved-linija' key={index}>{el}</span>)
  const buildGlavi = () => kniga.glavi.map((el, index) => <Glava glava={el} />)
  const buildKniga = () => {
    return (<div>
        {buildMeni()}
        <div className='voved'>
            <h3 className='voved-naslov'>{kniga.celo_ime}</h3>
            <h4 className='voved-naslov'>Вовед</h4>
            {buildVoved()}
        </div>
        {buildGlavi()}
    </div>);
  }

  return buildKniga();
}