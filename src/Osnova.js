import React, {useState} from "react";
import Sodrzina from './Sodrzina.js';
import Kniga from './Kniga.js';
import Biblija from './Biblija.json';

export default function Osnova() {
  const [kniga, setKniga] = useState(null);
  const [biblija] = useState(Biblija);
  const updateBook = (el) => setKniga(biblija[el.target.attributes.kniga.nodeValue]);

  return kniga
    ? <Kniga key={kniga.meta_fajl} kniga={kniga} biblija={biblija} setKniga={updateBook} />
    : <Sodrzina key="sodrzina" biblija={biblija} setKniga={updateBook} />;
}