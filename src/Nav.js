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
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                className="nav__logo" />
            <img
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                className="nav__avatar" />
        </div>
    );
}

export default Nav;