import React from 'react'
import css from './GalleryImage.module.css'
export default function GalleryImage({prodImage}) {
  return (
    <>
      <div className={css.outerDiv}>
        <div className={css.innerDiv}>
          <img src={prodImage} className={css.img} />
        </div>
      </div>
    </>
  )
}
