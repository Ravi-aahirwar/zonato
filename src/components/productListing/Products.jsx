import React from 'react'
import css from './Products.module.css'
export default function Products({result}) {
  return (
    <>
        <div className={css.outerDiv} >  {result} </div>
    </>
  )
}
