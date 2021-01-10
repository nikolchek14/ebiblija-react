import React, {useRef, useState, useEffect} from "react";
import Stih from './Stih.js';
import Referenci from './Referenci.js';
import useObserver from './useObserver.js';

export default function Glava({glava, kniga}) {
    const [offsets, setOffsets] = useState(null);
    const tekstRef = useRef(null);
    const refRefs = useRef([]);
    useEffect(() => {
        updateTops();
      }, []);

    const updateTops = () => {
        const tops = [];
        const refs = refRefs.current.map((el) => {
            const stihBr = el && parseInt(el.getElementsByClassName('stih-referenca')[0].innerHTML);
            const height = el && el.clientHeight;
            const top = el && el.offsetTop;
            return { stihBr: stihBr, height: height, top: top}
        });
        tekstRef && tekstRef.current && Array.from(tekstRef.current.getElementsByClassName('stih-position')).forEach((el,index) => {
            if(index === 0) {
                tops.push(el.offsetTop);
            } else {
                const prevElement = refs.find((el) => el.stihBr === index);
                const prevHeight = prevElement ? prevElement.height : 0;
                const top = el.offsetTop > prevHeight + tops[index-1] ? el.offsetTop : prevHeight + tops[index-1];
                tops.push(top);
            }
        });
        setOffsets(tops);
    }
    const updateOnResize = () => {
        updateTops();
    };

    useObserver({callback: updateOnResize, element: tekstRef});

    const buildGlavi = () => {
        const stihovi = [];
        const referenci = [];
        refRefs.current = [];
        glava.stihovi.forEach((el, index) => {
            stihovi.push(<Stih stih={el} glavaBr={glava.r_br} key={`stih-${index}`} />);
            const style = offsets ? {
                top: `${offsets[index]+5}px`,
                position: 'absolute',
            } : null;
            const getRef = (element) => (refRefs.current.push(element))
            el.referenci && referenci.push(<Referenci style={style} stih={el} ref={getRef} key={`referenci-${index}`} kniga={kniga} glava={glava.r_br} />);
        });

        return <div className='glava'>
            <span className='glava-tekst' ref={tekstRef}>{stihovi}</span>
            <span className='glava-referenci'>{referenci}</span>
        </div>;
    }

    return buildGlavi();
}