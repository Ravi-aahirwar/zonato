import React from 'react'
import css from './Category.module.css'
import {NavLink} from 'react-router-dom'
export default function Category({title, link,imgSrc }) {
        return (
        <>
            <NavLink to={link} style={{textDecoration:'none'}} >
            <div  className={css.categoryCard}>
                <div className={css.imgBox}>
                    <img src={imgSrc} alt={title} className={css.imgTk} />
                </div>
                <div className={css.txtBx}>
                    <div className={css.txt}>{title}</div>
                </div>
            </div>
            </NavLink>
        </>
    )
}
