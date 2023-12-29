import React from 'react'
import css from './ProductCard.module.css'
import maxSAfety from '/icons/maxsafty.png';
import star from '/icons/star.png';
import { Link } from 'react-router-dom';
export default function ProductCard(props) {
    const { promoted, time, offB, proExtraB, off, proExtra, name, rating, imgSrc, link,rate,location} = props;
    return (
        <>
            <Link className={css.outerDiv} to={link}>
                <div className={css.innerDiv}>
                    <div className={css.imgBox}>
                        {promoted && <div className={css.promoted}>Promoted</div>}
                        <img className={css.img} src={imgSrc} alt="food image" />
                        {offB && <div className={css.off}>{off}% OFF</div>}
                        {proExtraB && <div className={css.offPro}>Pro extra {proExtra}% OFF</div>}
                        <div className={css.duration}>{time} min</div>
                    </div>
                    <div className={css.txtBox}>
                        <div className={css.titleBox}>
                            <div className={css.title}>{name}</div>
                            <div className={css.ratingBox}> {rating} <img className={css.star} src={star} alt="gorwing arrow" /></div>
                        </div>
                        <div className={css.tagBox}>
                            <div className={css.tagTitle}>{location}</div>
                            <div className={css.tagTxt}>₹<span className={css.type}>{rate}</span> for <span className={css.num}>One</span></div>
                        </div>
                    </div>
                    <div className={css.footer}>
                        <div className={css.scroll1}>
                            <div className={css.lg2}><img className={css.maxSafety} src={maxSAfety} alt="max safety" /></div>
                            <div className={css.ordersPlaces}>Follow All Max Safety measure to ensure your food is Safe</div>
                        </div>
                    </div>
                </div>
            </Link>

        </>
    )
}
