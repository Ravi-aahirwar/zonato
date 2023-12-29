import React from 'react'
import Appcss from './App.module.css'
import HomePageBanner from './components/homeComponents/HomePageBanner'
import Footer from './components/footer/Footer'
import Category from './category/Category'
import PopularPlaces from './components/homeComponents/PopularPlaces/PopularPlaces'
import orderOnline from '/images/orderonline.jpg'
import dinning from '/images/diningout.jpg'
import proAndProPlus from '/images/proandproplus.jpg'
import nightLifeAndClub from '/images/nightlifeandclubs.jpg'
import Collection from './components/collection/Collection'
export default function App() {
  return (
    <>
      <HomePageBanner />
      <div className={Appcss.bodySize} >
        <div className={Appcss.chooseTypeCards}>
          <Category imgSrc={orderOnline} title="Order Online" link="delivery" />
          <Category imgSrc={dinning} title="Dinning Out" link="dining" />
          <Category imgSrc={proAndProPlus} title="Night Life and Clubs" link="nightLife" />
          <Category imgSrc={nightLifeAndClub} title="Pro and Pro Plus " link="proandproplus" />
        </div>
        <div style={{width:"90%",margin:"auto"}} >
        <Collection />
        <PopularPlaces />
        </div>
      </div>
      <Footer />
    </>
  )
}
