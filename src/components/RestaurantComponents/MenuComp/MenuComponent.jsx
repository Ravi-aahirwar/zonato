import React from 'react'

import css from './MenuComponent.module.css'
import MenuCard from '../MenuCard/MenuCard'
const MenuComponent = ({prodImage,prodName}) => {

  const menuCards = [
    {
      imgSrc: prodImage,
      ttl: "Menu",
      pages: 23
    },
    {
      imgSrc: prodImage,
      ttl: "Menu Card",
      pages: 12
    }
  ]

  return <div className={css.outerDiv}>
      <div className={css.ttl}>{prodName}</div>
        <div className={css.menuCard}>
          {menuCards?.map((val, id) => {
            return <MenuCard key={id} prodImage={prodImage} ttl={val.ttl} pages={val.pages} />
          })}
        </div>
  </div>

}

export default MenuComponent