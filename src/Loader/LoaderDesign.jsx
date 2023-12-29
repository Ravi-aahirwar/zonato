import React from 'react'
import css from './LoaderDesign.module.css'
export default function LoaderDesign() {
    return (
        <>
            <div className={css.container} >
                <div className={css.spinner}></div>
            </div>
        </>
    )
}
