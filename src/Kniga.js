import React from "react";
import Glava from './Glava.js';
import Meni from './Meni.js';

export default function Kniga({kniga, biblija, setKniga}) {
  const buildMeni = () => <Meni kniga={kniga} biblija={biblija} setKniga={setKniga}/>
  const buildVoved = () => kniga.voved.map((el, index) => <div key={index}>{el}</div>)
  const buildGlavi = () => kniga.glavi.map((el, index) => <div key={index}><div>{el.r_br}</div><Glava glava={el} /></div>)
  const buildKniga = () => {
    return (<div>
        {buildMeni()}
        {buildVoved()}
        {buildGlavi()}
    </div>);
  }

  return buildKniga();
}