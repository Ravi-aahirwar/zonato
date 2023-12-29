import React from 'react'
import css from './SearchError.module.css'
export default function SearchError() {
    return (
        <>
            <div className={css.outerErr}>
                <div className={css.innerErr} >
                    <img className={css.imgErr} src="https://b.zmtcdn.com/data/web_assets/92ee94aa8441af56a34dc5a61547c50a1591338812.png" alt="error" />
                </div>
                <p className={css.errTxt}>No items found...</p>
            </div>
        </>
    )
}
