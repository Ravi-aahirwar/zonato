import React, { useEffect, useState } from 'react'
import css from './PhotosComponent.module.css'
import GalleryImgCard from '../../RestaurantComponents/GalleryImgCard/GalleryImgCard'
import Gallery from '../GalleryImgCard/Gallery';

const imagesData = [
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/3c63b01eb5c4a89cea1adf0061effd41.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'all' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/9/50609/0578de020251e6ff17b34e8d34e5685c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'ambience' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },
  { imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/50609/2f674b37b8d800a78c57fe40d50f06a5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A", id: 'food' },

]
export default function PhotosComponent({ prodName }) {

  const [data, setData] = useState("");
  const handleClicked = (foodData) => {
    setData(foodData)
  };
  function filteredData(selected, imagesData) {
    let filteredProducts = imagesData
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ id }) => (
          id === selected
        ))
    }
    return filteredProducts.map(
      ({ imgSrc }) => (
        <GalleryImgCard
          key={Math.random()}
          imgSrc={imgSrc}
        />
      ))
  }
  const result = filteredData(data, imagesData)
  const [length, setLength] = useState();
  const [foodLength,setFoodLength] = useState();
  const[ambienceLength,setAmbienceLength]=  useState();
  useEffect(() => {
    setLength(imagesData.length)
    const foodLength = imagesData.filter((item)=> item.id==="food");
    setFoodLength(foodLength.length);
    const ambienceLength = imagesData.filter((item)=> item.id==="ambience");
    setAmbienceLength(ambienceLength.length)
    
  }, [length,foodLength,ambienceLength])

  return (
    <div className={css.outerDiv}>
      <div className={css.ttl}>{prodName}</div>
      <div className={css.btns}>
        <button onClick={() => handleClicked("")} className={data === "" ? [css.btn, css.activeBtn].join(" ") : css.btn} >All ({length})</button>
        <button onClick={() => handleClicked("food")} className={data === "food" ? [css.btn, css.activeBtn].join(" ") : css.btn} >Food ({foodLength})</button>
        <button onClick={() => handleClicked("ambience")} className={data === "ambience" ? [css.btn, css.activeBtn].join(" ") : css.btn} >Ambience ({ambienceLength})</button>
      </div>
      <Gallery result={result} />
    </div>
  )
}
