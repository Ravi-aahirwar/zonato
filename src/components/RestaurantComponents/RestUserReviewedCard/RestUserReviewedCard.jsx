import { useState } from 'react'

import css from './RestUserReviewedCard.module.css'
import starImg from '/icons/star.png'

import likeImg from '/icons/like.png'
import likedImg from '/icons/liked.png'
import comment from '/icons/message.png'

import WhiteBtnHov from '../../../components/buttonComponents/WhiteBtnHov/WhiteBtnHov'
import RedBtnHov from '../../../components/buttonComponents/RedBtnHov/RedBtnHov'

const RestUserReviewedCard = (props) => {
    let { imgSrc, title, reviews, stars, days, comments,id,userImg } = props;
    let [liked, setLiked] = useState(0);
    let [toggleCommentBox, setToggleCommentBox] = useState(false);
    let [following, setFollowing] = useState(0);

    return (
        <>
            <div className={css.outerDiv}>
                <div className={css.innerDiv}>
                    <div className={css.sec1}>
                        <div className={css.leftBox}>
                            <div className={css.imgBox}><img className={css.hotelImg} src={imgSrc} alt='hotel image' /></div>
                            <div className={css.txtBox1}>
                                <div className={css.title}>{title}</div>
                                <div className={css.det}>
                                    <div className={css.userDet}>{reviews} Reviews</div>
                                    <div></div>
                                    <div className={css.userDet}>{following} Followers</div>
                                </div>
                            </div>
                        </div>
                        <div className={css.rightBox}>
                            {!following ? <WhiteBtnHov txt="Follow"  onClick={() => setFollowing(true?following+1:"")} /> : <RedBtnHov txt="Following" onClick={() => setFollowing(false?following-1:0)} />}
                        </div>
                    </div>
                    <span className={css.delivery}>
                        {stars}
                        <img src={starImg} alt="star" />
                    </span>
                    <div className={css.sec}>
                        <div className={css.delTxt} >Delivery:</div>
                        <span className={css.days}>{days} days</span>
                    </div>
                    <div className={css.sec}>
                        <div className={css.txt}>{liked} {liked?"Helpful Vote":"Votes for helpful"}, {comments} Comments</div>
                    </div>
                    <div className={css.sec}>
                        <div className={css.txtBox2} onClick={() => setLiked(val => !val?liked+1:liked-1)}>
                            <img src={liked ? likedImg : likeImg} alt='thumbs up'className={css.icon} />
                            <span className={css.txt2}>Helpful</span>
                        </div>
                        <div className={css.txtBox2} onClick={() => setToggleCommentBox(val => !val)}>
                            <img src={comment} alt='comment' className={css.icon} />
                            <span className={css.txt2}>Comment</span>
                        </div>
                    </div>
                </div>
            </div>
            {toggleCommentBox ? <div className={css.commentBox}>
                <div className={css.userImgBox}><img src={userImg} className={css.userImg} alt="user profile pic" /></div>
                <div className={css.inputBox}><input type='text' className={css.inptTxtBox} placeholder="Write your comment" /></div>
            </div> : null}
        </>
    )
}

export default RestUserReviewedCard