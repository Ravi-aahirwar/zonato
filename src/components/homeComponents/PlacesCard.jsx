import { Link } from 'react-router-dom';

import css from './PlacesCard.module.css';

import rightArrow from '/icons/right-arrow.png';

let PlacesCard = ({ place, link,id }) => {
    return <Link to={link} className={css.card} key={id} >
        <div className={css.innerBox}>
            <div className={css.place}>{place}</div>
        </div>
        <div className={css.arrowBox}>
            <img className={css.arrow} src={rightArrow} alt="right arrow" />
        </div>
    </Link>
}

export default PlacesCard;