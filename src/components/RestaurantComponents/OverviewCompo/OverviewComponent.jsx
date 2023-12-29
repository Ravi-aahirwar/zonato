
import css from './OverviewComponent.module.css'

import tickGreen from '/icons/tick-green.png'

import rightArrrow from '/icons/right-arrow.png'
import recommend from '/images/recommend.avif'

import LabelUtil from '../LabelUtil/LabelUtil'
import MenuCard from '../MenuCard/MenuCard'
import CollectionsCard from "../../../card/collectionCard/CollectionsCard"
import RecentlyViewedCard from "../RecentlyViewedCard/RecentlyViewedCard"
import OverviewAboutCard from "../OverviewAboutCard/OverviewAboutCard"

import christmas from '/images/christmas.avif'
import christmasTwo from '/images/christmasTwo.avif'
import christmasThree from '/images/christmasThree.avif'

const OverviewComponent = ({ prodImage, name, link }) => {

  const data = {
    phone: "7428388947",
    address: "Bengaluru, Hyderabad, Tamilnadu, India",
    lat: 110.11,
    lng: 188.31
  }

  const similarRest = [
    {
      id: 1,
      imgSrc: recommend,
      nam: "Pamgeo Biryani",
      ratingsDining: 3.2,
      ratingsDelivery: 4.6,
      address: "Modern India, Bengaluru",
    },
    {
      id: 2,
      imgSrc: recommend,
      nam: "Bengaluru Biryani",
      ratingsDining: 3.2,
      ratingsDelivery: 4.6,
      address: "Modern India, Bengaluru",
    }
  ]

  const labels = [
    { link: "/", txt: "North Indian" },
    { link: "/", txt: "South Indian" },
    { link: "/", txt: "East Indian" },
    { link: "/", txt: "West Indian" },
    { link: "/", txt: "Desserts" }
  ]

  const menuData = [
    { ttl: "Food Menu", pages: "13" },
    { ttl: "Food Menu Card", pages: "20" }
  ]

  const moreInfo = [
    { item: "Breakfast", imgSrc: tickGreen },
    { item: "Takeaway Available", imgSrc: tickGreen },
    { item: "Family Friendly", imgSrc: tickGreen },
    { item: "Home Delivery", imgSrc: tickGreen },
    { item: "Indoor Seating", imgSrc: tickGreen }
  ]

  const collectionData = [
    { imgSrc: christmas, title: "Catch the Match", places: "11" },
    { imgSrc: christmasTwo, title: "Catch the Match", places: "21" },
    { imgSrc: christmasThree, title: "Catch the Match", places: "17" },
  ]

  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
      <div className={css.leftBox}>
        <div className={css.ttl}>About this place</div>

        <div className={css.menuSec}>
          <div className={css.subTtl}>Menu</div>
          < div className={css.menuLink}>See all menus <img src={rightArrrow} className={css.rightArrowIcon} alt="right arrow" /></div>
        </div>

        <div className={css.rightFlex}>
          <div className={css.menuSecBdy}>
            {menuData?.map((val, id) => {
              return <MenuCard link={link} key={id} ttl={val.ttl} prodImage={prodImage} name={name} pages={val.pages} />;
            })}
          </div>

          <div className={css.rightBox}>
            <OverviewAboutCard data={data} />
          </div>
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Cuisines</div>
          <div className={css.labels}>
            {labels?.map((val, id) => {
              return <LabelUtil key={id} link={val.link} txt={val.txt} />;
            })}
          </div>
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>People Say This Place Is Known For</div>
          <div className={css.secTxt}>Great Buffet Spread, Fusion Dishes, Ample Seating Area, Family Place, Family Crowd, Quantity</div>
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Average Cost</div>
          <div className={css.secTxt}>₹1000 for two people (approx.)</div>
          <div className={css.secTxt1}>Exclusive of applicable taxes and charges, if any</div>
          <div className={css.toolTipBox}>
            <div className={css.secTxtToolTip}>
              How do we calculate cost for two?
            </div>
            <div className={css.toolTip}>The cost for two is computed as follows: Average of 0 appetizers + 2 mains + 2 beverages + 1 dessert. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices.</div>
          </div>
        </div>
        <div className={css.sec2}>
          <div className={css.subTtl}>More Info</div>
          <div className={css.ulList}>
            {
              moreInfo?.map((val, id) => {
                return (
                  <div key={id} className={css.miniList} >
                    <img src={val.imgSrc} alt={val.item} />
                    <li style={{listStyle:"none"}} className={css.List} > {val.item} </li>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Featured In</div>
          <div className={css.secBdy}>
            {collectionData?.map((val, id) => {
              return <CollectionsCard key={id} imgSrc={val.imgSrc} title={val.title} places={val.places} />;
            })}
          </div>
        </div>
        <div className={css.sec}>
          <div className={css.subTtl}>Similar Restaurants</div>
          <div className={css.secBdy}>
            {similarRest.map((item) => {
              return <RecentlyViewedCard udata={item} link={link} key={item?.id} />;
            })}
          </div>
        </div>
      </div>

    </div>
  </div>
}

export default OverviewComponent