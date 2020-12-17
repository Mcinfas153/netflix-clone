import React, { useEffect, useState } from 'react';
import './nav.css';

function Nav() {

    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (document.documentElement.scrollTop > 200) {
                setNavScroll(true)
            } else {
                setNavScroll(false)
            }
        })
    }, []);

    return (
        <div className={`nav ${navScroll && 'nav__scroll'}`}>
            <img
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                className="nav__logo" />
            <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                className="nav__avatar" />
        </div>
    );
}

export default Nav;