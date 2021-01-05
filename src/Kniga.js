import React from "react";
import Glava from './Glava.js';

export default function Kniga({kniga}) {
  const buildVoved = () => kniga.voved.map((el, index) => <div key={index}>{el}</div>)

  const buildGlavi = () => kniga.glavi.map((el, index) => <div key={index}><div>{el.r_br}</div><Glava glava={el} /></div>)
  const buildKniga = () => {
    return (<div>
        {buildVoved()}
        {buildGlavi()}
    </div>);
  }

  return buildKniga();
}