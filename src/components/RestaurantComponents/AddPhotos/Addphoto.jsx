import React from 'react'
import css from './Addphoto.module.css'
import cameraIcon from '/icons/photo-camera.png'

export default function Addphoto() {

    return (
        <>
            <div className={css.outerDiv} onClick={() => setModal(true)}>
                <div className={css.innerDiv}>
                    <div className={css.txtDiv}>
                        <div className={css.imgDiv}>
                            <img src={cameraIcon} className={css.img} />
                        </div>
                        <span className={css.txt}>Add Photos</span>
                    </div>
                </div>
            </div>
        </>
    )
}
