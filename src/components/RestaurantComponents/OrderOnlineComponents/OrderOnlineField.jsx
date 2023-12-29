import React, { useEffect } from 'react'
import css from './OrderOnlineField.module.css'
import { useState } from 'react'

import DownloadAppUtil from '../../restaurantsUtil/DownloadAppUtil/DownloadAppUtil'
import SmallSearchBarUtil from '../../SmallSearchBar/SmallSearchBarUtil'
import OfferTrackUtil from '../../OfferTrack/OfferTrackUtil'

import compassIcon from '/icons/compass.png'
import clockIcon from '/icons/clock.png'
import vegIcon from '/icons/veg.png'
import nonVegIcon from '/icons/nonveg.png'


import hariyalikebab from '/images/hariyalikebab.jpg'
import FoodItemProduct from '../../restaurantsUtil/FoodItemProduct/FoodItemProduct'
import andhraMeal from '/images/andhraMeal.avif'
import biryani from '/images/biryani.avif'
import soup from '/images/soup.avif'
import FoodProd from '../../restaurantsUtil/FoodItemProduct/FoodProd'
// import item from '../../productListing/productData/Items'
import SearchError from '../../filtererror/SearchError'

const offerTrackData = [
  { txt1: "0% OFF up to ₹80 + 10% OFF up to ₹75 Paytm Cashback", txt2: "use code PAYTMBASH" },
  { txt1: "Flat ₹155 OFF", txt2: "use code ZONATO01" }
]

const foodItemsData = {
  recommended: [
    { mustTry: true, heading: "Recommended", ttl: "Andra Meals", votes: "12", price: "340", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Andra Meals", votes: "12", price: "340", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Andra Meals", votes: "12", price: "340", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Andra Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Andra Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
  ],
  biryanis: [
    { mustTry: true, imgSrc: biryani, ttl: "Biryani Pot", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "egg" },
    { mustTry: true, imgSrc: biryani, ttl: "Biryani Pot", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "egg" },
    { mustTry: true, imgSrc: biryani, ttl: "Biryani Pot", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "egg" },
    { mustTry: true, imgSrc: biryani, ttl: "Biryani Pot", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Biryani Pot", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ],
  indian: [
    { mustTry: true, heading: "Indian", imgSrc: andhraMeal, ttl: "Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Meals", votes: "12", price: "1400", desc: "Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Meals", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ],

  tandoori: [
    { mustTry: true, heading: "Tandooris", imgSrc: "https://b.zmtcdn.com/data/dish_photos/823/a5b6cd1c30ce1fda16e183311de22823.jpeg?fit=around|130:130&crop=130:130;*,*", ttl: "Paneer Tikka", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/823/a5b6cd1c30ce1fda16e183311de22823.jpeg?fit=around|130:130&crop=130:130;*,*", ttl: "Paneer Tikka", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/823/a5b6cd1c30ce1fda16e183311de22823.jpeg?fit=around|130:130&crop=130:130;*,*", ttl: "Paneer Tikka", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/823/a5b6cd1c30ce1fda16e183311de22823.jpeg?fit=around|130:130&crop=130:130;*,*", ttl: "Paneer Tikka", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "egg" },
    { mustTry: true, ttl: "Hariyali Kebab", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ],
  chinese: [
    { mustTry: true, heading: "Chinese", imgSrc: biryani, ttl: "Fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: biryani, ttl: "Fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: biryani, ttl: "Fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: biryani, ttl: "Fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Hariyali Kebab", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }

  ],
  "Noodles & Fried Rice": [
    { mustTry: true, heading: "Noodles & fried Rice", imgSrc: "https://b.zmtcdn.com/data/dish_photos/e5e/052285c253195aebcc39cb786cab4e5e.jpg?fit=around|130:130&crop=130:130;*,*", ttl: "Noodles & fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/e5e/052285c253195aebcc39cb786cab4e5e.jpg?fit=around|130:130&crop=130:130;*,*", ttl: "Noodles & fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/e5e/052285c253195aebcc39cb786cab4e5e.jpg?fit=around|130:130&crop=130:130;*,*", ttl: "Noodles & fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: "https://b.zmtcdn.com/data/dish_photos/e5e/052285c253195aebcc39cb786cab4e5e.jpg?fit=around|130:130&crop=130:130;*,*", ttl: "Noodles & fried Rice", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Paneer Tikka", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ],
  soups: [
    { mustTry: true, heading: "Soups", imgSrc: soup, ttl: "Hot N Soup", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: soup, ttl: "Hot N Soup", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: soup, ttl: "Hot N Soup", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: soup, ttl: "Hot N Soup", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Hot N Soup", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "egg" }
  ],
  roti: [
    { mustTry: true, heading: "Roti", imgSrc: andhraMeal, ttl: "Roti", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Roti", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Roti", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Roti", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Hariyali Kebab", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ],
  dessert: [
    { mustTry: true, heading: "Desserts", imgSrc: andhraMeal, ttl: "Sweets", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Sweets", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Sweets", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, imgSrc: andhraMeal, ttl: "Sweets", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" },
    { mustTry: true, ttl: "Sweets", votes: "12", price: "1400", desc: "Rice+Dal+Palya/Sabji+Chutney+Sambar+Rasam+Curd+Papad+Sweet+Ghee+Pickle+Gun powder+Salt chilli (Serves-1)", vegNonveg: vegIcon, foodType: "veg" }
  ]
}
export default function OrderOnlineField() {
  // button filter
  const [isActive, setIsActive] = useState("");
  function handleClicked(number) {
    setIsActive(number)
  }
  // Input Filter
  const [query, setQuery] = useState("");
  const handleInput = (event) => {
    setQuery(event.target.value);
  }
  const filtered = Object.values(foodItemsData).flat();
  function filterData(query, filtered, selected) {
    let filteredProducts = filtered
    if (query) {
      filteredProducts = filtered.filter((Data) => Data.ttl.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ heading, ttl }) =>
          heading === selected ||
          ttl === selected
      )
    }
    return filteredProducts;
  }
  const filteredResult = filterData(query, filtered, isActive)
  console.log(filteredResult.length)
  const result = filteredResult.length > 0 ? (
    filteredResult.map(
      ({ imgSrc, ttl, votes, price, desc, vegNonveg, mustTry }) => (
        <FoodItemProduct
          key={Math.random()}
          imgSrc={imgSrc}
          ttl={ttl}
          votes={votes}
          price={price}
          desc={desc}
          vegNonveg={vegNonveg}
          mustTry={mustTry}
        />
      )
    )
  ) : (
    <SearchError/>
  );



  return (
    <>
      <div className={css.outerDiv} >
        <div className={css.innerDiv} >
          <div className={css.leftBox} >
            <div onClick={() => handleClicked("")} className={isActive === "" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Recommended </div>
            <div onClick={() => handleClicked("Hariyali Kebab")} className={isActive === "Hariyali Kebab" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Biryanis </div>
            <div onClick={() => handleClicked("Meals")} className={isActive === "Meals" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Indian </div>
            <div onClick={() => handleClicked("Paneer Tikka")} className={isActive === "Paneer Tikka" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Tandooris</div>
            <div onClick={() => handleClicked("Fried Rice")} className={isActive === "Fried Rice" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Chinese</div>
            <div onClick={() => handleClicked("Noodles & fried Rice")} className={isActive === "Noodles & fried Rice" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Noodles & Fried Rice</div>
            <div onClick={() => handleClicked("Hot N Soup")} className={isActive === "Hot N Soup" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Soups</div>
            <div onClick={() => handleClicked("Roti")} className={isActive === "Roti" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Roti</div>
            <div onClick={() => handleClicked("Sweets")} className={isActive === "Sweets" ? [css.navTab, css.activeNavTab].join(" ") : css.navTab}  >Desserts</div>
          </div>

          <div className={css.rightBox} >

            <div className={css.hSec}>

              <div className={css.ttl}>Order Online</div>
              <SmallSearchBarUtil placeholder="Search within menu" query={query} handleInput={handleInput} />
            </div>

            <div className={css.tabBox}>
              <div className={css.tagLine}>
                <img src={compassIcon} className={css.clockIcon} alt="live track" />
                <span className={css.tabTxt}>Live track your order</span>
              </div>
              <div className={css.hr} />
              <div className={css.tagLine}>
                <img src={clockIcon} className={css.clockIcon} alt="time" />
                <span className={css.tabTxt}>30 min</span>
              </div>
            </div>

            <div className={css.offersTrack}>
              {offerTrackData?.map((val, id) => {
                return <OfferTrackUtil key={id} txt1={val.txt1} txt2={val.txt2} />
              })}
            </div>

            <div className={css.itemBox}>
              <div className={css.sec}>
                <FoodProd result={result} />
              </div>
            </div>
          </div>

        </div>
        <DownloadAppUtil />
      </div>
    </>
  )
}





