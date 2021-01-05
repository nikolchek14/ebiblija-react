import React from "react";

function Sodrzina({biblija, setKniga}) {
  const buildLinks = () => biblija.map(((el,index) => (<div key={`sodrzina_${el.meta_fajl}`}><button onClick={setKniga} kniga={index}>{el.meta_fajl}</button></div>)))

  return buildLinks();
}

export default Sodrzina;