import React from 'react'
import css from './HeroComponent.module.css'
import food1Img from '/images/food1.jpg';
import GalleryImage from '../RestaurantComponents/galleryImages/GalleryImage';
import ViewGallery from '../RestaurantComponents/viewGallery/ViewGallery';
import Addphoto from '../RestaurantComponents/AddPhotos/Addphoto';
export default function HeroComponent({prodImage}) {
    return (
        <>
            <div className={css.outerDiv}>
                <div className={css.innerDiv}>
                    <div className={css.scr1}>
                        <GalleryImage prodImage = {prodImage}/>
                    </div>
                    <div className={css.scr2}>
                        <GalleryImage prodImage = {prodImage} />  
                        <ViewGallery img={prodImage} />
                        <GalleryImage prodImage = {prodImage} /> 
                        <Addphoto/>
                    </div>
                </div>
            </div>
        </>
    )
}
