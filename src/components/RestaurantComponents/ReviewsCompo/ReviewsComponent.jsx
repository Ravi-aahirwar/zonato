import React from 'react'

import reviewCSS from './ReviewsComponent.module.css'

import RestUserReviewedCard from '../RestUserReviewedCard/RestUserReviewedCard'
import DropdownUtil from '../../restaurantsUtil/DropdownUtil/DropdownUtil'

import profilepic from '/images/profilepic.jpeg'
import dropdownIcon from '/icons/down-arrow1.png';
import menu from '/icons/menu.png';

const ReviewsComponent = () => {

  let data = [
    {
      imgSrc: profilepic,
      title: "Ravi Aahirwar.",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 5,
      votes: 0,
      comments: 5,
      id: 1,
      userImg: profilepic,
      userId: 11,
    },
    {
      imgSrc: profilepic,
      title: "Ravi Aahirwar.",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 5,
      votes: 0,
      comments: 5,
      id: 2,
      userImg: profilepic,
      userId: 11,
    }, {
      imgSrc: profilepic,
      title: "Ravi Aahirwar.",
      reviews: 0,
      followers: 0,
      stars: 3,
      days: 5,
      votes: 0,
      comments: 5,
      id: 3,
      userImg: profilepic,
      userId: 11,
    }
  ];

  const options1 = [
    "All Reviews",
    "Following",
    "Popular",
    "Bloggers",
    "My Reviews",
    "Order Reviews"
  ]

  const options2 = [
    "Newest First",
    "Oldest First",
    "Highest Rated",
    "Lowest Rated"
  ]
  return(

   <div className={reviewCSS.outerDiv}>
    <div className={reviewCSS.innerDiv}>
      <div className={reviewCSS.left}>
        <div className={reviewCSS.dropDowns}>
          <DropdownUtil options={options1}  icon2={dropdownIcon} filFunc={(val) => console.log(val)} />
          <DropdownUtil options={options2} icon1={menu} icon2={dropdownIcon} filFunc={(val) => console.log(val)} />
        </div>
        <div className={reviewCSS.re}>
          {
            data.map(
              ({imgSrc,title,reviews,followers,stars,days,votes,comments,id,userId,userImg})=>{
                return(
                  <div key={id} >
                    <RestUserReviewedCard
                    imgSrc={imgSrc}
                    title={title}
                    reviews={reviews}
                    followers={followers}
                    stars={stars}
                    days={days}
                    votes={votes}
                    comments={comments}
                    userId={userId}
                    userImg={userImg}
                    />
                    {/* <p> {title} </p>
                    <p> {reviews} </p>
                    <p> {followers} </p>
                    <p> {days} </p> */}
                  </div>
                )
              })
          }
        </div>
      </div>
      <div className={reviewCSS.right}>
      </div>
    </div>
  </div>
  )
}

export default ReviewsComponent