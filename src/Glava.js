import React from "react";
import Stih from './Stih.js'

export default function Glava({glava}) {
    const buildGlavi = () => glava.stihovi.map((el, index) => <Stih stih={el} />);

    return buildGlavi();
}