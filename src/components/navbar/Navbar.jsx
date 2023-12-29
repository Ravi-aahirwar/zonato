import { useState } from 'react';
import { Link } from 'react-router-dom'

import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'
import downArrow from '/icons/down-arrow.png'
import profilePic from '/images/profilepic.jpeg'


import css from './Navbar.module.css';
import SearchBar from '../searchBar/Searchbar';

let NavigationBar = ({ toogleMenu, setToggleMenu, handleChanged, query }) => {
    let [menuDisplay, setMenuDisplay] = useState(false);
    let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);

    const logoutHandler = () => {
        setLoggedIn(false);
        localStorage.removeItem("auth");
    }

    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.bothBar} >
                <div className={css.leftSide}>
                    <Link to='/' className={css.appTxt}>Zonato</Link>
                    <div className={css.searchBar}>
                        <SearchBar query={query} handleChanged={handleChanged} />
                    </div>
                </div>
            </div>
            <div className={css.rightSide}>
                {
                    loggedIn ? (<div
                        className={css.menuItem}>
                        <div className={css.profile} onClick={() => setMenuDisplay(val => !val)}>
                            <img src={profilePic} alt="profile pic" className={css.profilePic} />
                            <div className={css.profileName}>Profile</div>
                            <img src={downArrow} alt="arrow" className={css.arrow} />
                        </div>
                    </div>) : (<>
                        <div className={css.menuItem} onClick={setLoggedIn}>Log in</div>
                        <div className={css.menuItem}>Sign up</div>
                    </>)
                }

            </div>

        </div>
    </div>
}

export default NavigationBar;