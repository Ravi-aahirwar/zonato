import React from 'react'
import css from './Collection.module.css'
import rightArrow from '/icons/right-arrow.png'
import CollectionsCard from '../../card/collectionCard/CollectionsCard'


import christmas from '/images/christmas.avif'
import christmasTwo from '/images/christmasTwo.avif'
import christmasThree from '/images/christmasThree.avif'
import christmasFour from '/images/christmasFour.avif'


export default function Collection() {
  return (
    <div>
     <div className={css.outerDiv}>
        <div className={css.title}>Collections</div>
        <div className={css.tagLine}>
            <span className={css.desc}>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</span>
            <span className={css.collectionPlacesTag}>All collections in Bengaluru <span className={css.rightArrowBox}><img className={css.rightArrow} src={rightArrow} alt="right arrow" /></span></span>
        </div>
        <div className={css.cards}>
            <CollectionsCard imgSrc={christmas} title="Christmas Special Restaur.." places="10" />
            <CollectionsCard imgSrc={christmasTwo} title="New Year's Special Restau" places="21" />
            <CollectionsCard imgSrc={christmasThree} title="Newly Opened Restaurant" places="17" />
            <CollectionsCard imgSrc={christmasFour} title="Best in Banglore" places="20" />
        </div>
    </div>
    </div>
  )
}
