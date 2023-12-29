import React, { useEffect, useState } from 'react'
import css from './ProductDetailPage.module.css'
import NavigationBar from '../../navbar/Navbar'
import HeroComponent from '../../heroComponent/HeroComponent'
import Footer from '../../footer/Footer'
import { useParams } from 'react-router-dom'
import item from '../productData/Items'
import OrderTitleComp from '../../orderTitleComp/OrderTitleComp'
import OrderBodyPage from '../../RestaurantComponents/OrderBodyPage'
export default function ProductDetailPage() {

  const { restaurantsdetails } = useParams()
  const thisProduct = item.find(myProd => myProd.name === restaurantsdetails);
  let prodImage = thisProduct.imgSrc
  let prodDescr = thisProduct.description
  let prodLocation = thisProduct.location
  let prodName = thisProduct.name
  console.log(prodImage)

  return (
    <>
      <div className={css.outerDiv}>
        <NavigationBar />
        <div className={css.innerDiv}>
          <div className={css.breadcrumb}>
            Home
            /
            India
            /
            Hyderabad
            /
            Hyderabad City
            /
            Indira Nagar
            /
            West Bengalore
            /
            Race Course Road
            /
            Order Online
          </div>
        </div>
        <HeroComponent prodImage={prodImage} />
        <div className={css.innerDiv2}>
          <OrderTitleComp prodName={prodName} prodDescr={prodDescr} prodLocation={prodLocation} />
          <OrderBodyPage prodName={prodName} prodImage={prodImage} />
        </div>
        <Footer />
      </div>
    </>
  )
}
