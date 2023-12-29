import React from 'react'
import RatingUtil from '../ratingUtil/RatingUtil'
import css from './OrderTitleComp.module.css'
import infoIcon from '/icons/info.png'
export default function OrderTitleComp({prodDescr , prodLocation,prodName}) {
    return (
        <>
            <div className={css.outerDiv}>
                <div className={css.innerDiv}>
                    <div className={css.left}>
                        <div className={css.title}> {prodName} </div>
                        <div className={css.specials}> {prodDescr} </div>
                        <div className={css.address}> {prodLocation} </div>
                        <div className={css.timings}>
                            <span className={css.opORclo}>Open now -</span>
                            <span className={css.time}>10am - 11pm (Today)</span>
                            <span className={css.infoIconBox}>
                                <img className={css.infoIcon} src={infoIcon} />
                            </span>
                        </div>
                    </div>
                    <div className={css.right}>
                        <RatingUtil rating="4.1" count="601" txt="Dining Reviews" />
                        <RatingUtil rating="3.6" count="37.3k" txt="Delivery Reviews" />
                    </div>
                </div>
            </div>
        </>
    )
}
