import React from 'react'
import css from './ViewGallery.module.css'
export default function ViewGallery({img}) {
    return (
        <>
            <div className={css.outerDiv}>
                <div className={css.innerDiv}>
                    <img src={img} className={css.img} />
                </div>
                <div className={css.txt}>
                    View Gallery
                </div>
            </div>
        </>
    )
}
