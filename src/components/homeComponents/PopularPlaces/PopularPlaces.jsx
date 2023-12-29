import { useState } from 'react';

import css from './PopularPlaces.module.css';
import PlacesCard from '../PlacesCard'
import { useParams } from 'react-router-dom';

const places = [
    {
        id:1,
        place:"Agra Restaurants"
    },
    {
        id:2,
        place:"Ahmedabad Restaurants"
    },
    {
        id:3,
        place:"Bengaluru Restaurants"
    },
    {
        id:4,
        place:"Bhopal Restaurants"
    },
    {
        id:4,
        place:"Chennai Restaurants"
    },
    {
        id:6,
        place:"Cuttack Restaurants"
    },
    {
        id:7,
        place:"Delhi NCR Restaurants"
    },
    {
        id:8,
        place:"Dehradun Restaurants"
    },
    {
        id:9,
        place:"Goa Restaurants"
    },
    {
        id:10,
        place:"Guntur Restaurants"
    },
    {
        id:11,
        place:"Haridwar Restaurants"
    },
    {
        id:12,
        place:"Indore Restaurants"
    },
]

let PopularPlaces = () => {

    const params = useParams()
    // const[fetching,setFetching] = useState([])
    return <div className={css.outerDiv}>
        <div className={css.title}>
            <h2 className={css.para} >Popular locations in</h2>
                <div className={css.imgDiv} >
                    <div className={css.miniDiv} >
                        <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" alt="india" />
                    </div>
                    <h2 className={css.para} > India </h2>
                </div>
        </div>
        <div className={css.cont} >
        <p className={css.pCont} >From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>
        <div className={css.placesCards}>
            {
                places?.map(
                    ({id,place})=>{
                        return(
                            <PlacesCard
                                key={Math.random()}
                                place={place}
                                id={id}
                                link={`/places/${place}`}
                        />
                    )
                })
            }
        </div>
    </div>
}

export default PopularPlaces;