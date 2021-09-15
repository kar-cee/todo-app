import dark from './images/icon-sun.svg';
import light from './images/icon-moon.svg';
import React, { useState} from 'react';

export default function Header(props) {
    const [themeIcon, setthemeIcon] = useState(dark);
    
    const changeTheme = () => {
        props.settheme((prev) => {
            return prev === "dark" ? "light" : "dark";
        })
        setthemeIcon((prev) => {
            return prev === dark ? light : dark;
        })
    }
    return (
        <div className="header">
            <header className="header-title">TODO</header>
            <img src={themeIcon} alt="light theme" className="theme-icon" onClick={changeTheme}/>
        </div>
    )
}
