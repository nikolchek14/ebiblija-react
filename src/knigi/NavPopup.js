import React from "react";

const NavPopup = ({kniga, updateNav}) => {
    const buildNavPodglavi = (glava) => glava.stihovi.filter((el) => el.podnaslov).map((el, index) => {
        return (<>
                <button key={`navPodglavaDugme-${index}`} className='nav-dugme nav-podglava' onClick={() => updateNav(el, kniga)}>{el.podnaslov}</button>
            </>
        );
    });

    const buildNavGlavi = () => kniga.glavi.map((el, index) => {
        return (<span key={`navGlavaDugme-${index}`} className='nav-glavi'>
            <button className='nav-dugme nav-glava' onClick={() => updateNav(el, kniga)}>Глава {el.r_br}</button>
                <span className='nav-podglavi'>{buildNavPodglavi(el)}</span>
            </span>
        );
    });

    return <>{buildNavGlavi()}</>;
}

export default NavPopup;