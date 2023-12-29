import { useState } from 'react';
import mobileHand from '/icons/smartphone.png'
import menuBar from '/icons/menu.png'

import Login from '../../Auth/Login/Login'
import Signup from '../../Auth/Signup/Signup'

import css from './NavigationBar.module.css';

let NavigationBar = ({setToggleMenu}) => {
    let [auth, setAuth] = useState({
        closed: true,
        signup: false
    });

    return <div className={css.navbar}>
        <img className={css.menuBar} src={menuBar} alt='menu bar' onClick={() => setToggleMenu(val => !val)} />
        <div className={css.navbarInner}>
            <div className={css.leftSide}>
                <img src={mobileHand} alt="mobile in hand icon" className={css.img} />
                <div className={css.appTxt}>Get The App</div>
            </div>
            <div className={css.rightSide}>
                <div className={css.menuItem}>Add restuarant</div>
                <>
                    <div className={css.menuItem} onClick={() => setAuth({login: true })}>Log in</div>
                    <div className={css.menuItem} onClick={() => setAuth({login: false, signup: true })}>Sign up</div>
                </>
            </div>
        </div>
        <div className={css.modals}>
            {auth?.login ? <Login setAuth={setAuth} /> : null}
            {auth?.signup ? <Signup setAuth={setAuth} /> : null}
        </div>
    </div>
}

export default NavigationBar;