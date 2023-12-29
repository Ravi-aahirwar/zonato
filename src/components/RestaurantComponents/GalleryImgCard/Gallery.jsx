import React from 'react'
import css from './Gallery.module.css'
export default function Gallery({result}) {
  return (
    <>
      <div className={css.outerDiv}>
        <div className={css.innerDiv} >
       {result}
        </div>
       </div>
    </>
  )
}
