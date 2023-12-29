import React from 'react'

import css from './MenuCard.module.css'
import { Link } from 'react-router-dom'

const MenuCard = ({ prodImage, ttl, pages, name,link }) => {

  return (
    <Link to={link} style={{textDecoration:"none"}} >
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.cardsStlye}>
          <div className={css.cardDiv1}></div>
          <div className={css.cardDiv2}></div>
        </div>
        <div className={css.imgBox}>
          <img src={prodImage} alt={ttl} className={css.img} />
        </div>
        <div className={css.txtH}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.page}>{pages} Pages</div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MenuCard