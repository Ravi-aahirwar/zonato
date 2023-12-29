import { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom"

import css from './OrderBodyPage.module.css'
import OverviewComponent from './OverviewCompo/OverviewComponent'
import OrderOnlineField from './OrderOnlineComponents/OrderOnlineField'
import ReviewsComponent from './ReviewsCompo/ReviewsComponent'
import PhotosComponent from './PhotosComp/PhotosComponent'
import MenuComponent from './MenuComp/MenuComponent'

const OrderBodyComponent = ({ prodImage,prodName }) => {

    const [pageCompo, setPageComp] = useState("")
    const { restaurantsdetails, page = "" } = useParams();

    const isActiveClass = (e) => {
        if (e?.isActive) {
            return [css.menuTxt, css.menuTxtActive].join(" ");
        } else {
            return css.menuTxt;
        }
    }

    useEffect(() => {
        switch (`/restaurants/${restaurantsdetails}/${page}`) {
            case `/restaurants/${restaurantsdetails}/overview`:
                setPageComp(< OverviewComponent prodImage={prodImage} link={`/restaurants/${restaurantsdetails}/menu`} />);
                break;
            case `/restaurants/${restaurantsdetails}/order`:
                setPageComp(<OrderOnlineField />);
                break;
            case `/restaurants/${restaurantsdetails}/reviews`:
                setPageComp(<ReviewsComponent/>);
                break;
            case `/restaurants/${restaurantsdetails}/photos`:
                setPageComp(<PhotosComponent prodName={prodName} />);
                break;
            case `/restaurants/${restaurantsdetails}/menu`:
                setPageComp(<MenuComponent prodImage={prodImage} prodName={prodName} />);
                break;
            default:
                setPageComp(<OrderOnlineField />);
        }
    }, [ restaurantsdetails, page])


    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.menu}>
                <NavLink to={`/restaurants/${restaurantsdetails}/overview`} className={isActiveClass}>
                    Overview
                </NavLink>
                <NavLink to={`/restaurants/${restaurantsdetails}/order`} className={isActiveClass}>
                    Order Online
                </NavLink>
                <NavLink to={`/restaurants/${restaurantsdetails}/reviews`} className={isActiveClass}>
                    Reviews
                </NavLink>
                <NavLink to={`/restaurants/${restaurantsdetails}/photos`} className={isActiveClass}>
                    Photos
                </NavLink>
                <NavLink to={`/restaurants/${restaurantsdetails}/menu`} className={isActiveClass}>
                    Menu
                </NavLink>
            </div>
            <div className={css.componentsBody}>
                {pageCompo}
            </div>
        </div>
    </div>
}

export default OrderBodyComponent
























// import React, { useState } from 'react'
// import OverviewComponent from './OverviewCompo/OverviewComponent';
// import css from './OrderBodyPage.module.css'
// import OrderOnlineField from './OrderOnlineComponents/OrderOnlineField';
// export default function ShowCase({prodImage}) {
//     const tabData = [
//         {
//             id: 1,
//             title: 'Overview',
//             description: <OverviewComponent prodImage={prodImage} />
//         },
//         {
//             id: 2,
//             title: 'Order Online',
//             description: <OrderOnlineField/>
//         },
//         {
//             id: 3,
//             title: 'Reviews',
//             description: 'new DESIGN Paints'
//         },
//         {
//             id: 4,
//             title: 'Photos',
//             description: 'new ADIDAS SHOES'
//         },
//         {
//             id: 5,
//             title: "Menu"
//         }
//     ];

//     const [tab, setTab] = useState(1);

//     function activeTab(tabNumber) {
//         setTab(tabNumber);
//     }

//     const overview = tabData.filter((data) => data.title === 'Overview');
//     const orderOnline = tabData.filter((data) => data.title === 'Order Online');
//     const review = tabData.filter((data) => data.title === 'Reviews');
//     const photos = tabData.filter((data) => data.title === 'Photos');
//     const menu = tabData.filter((data) => data.title === 'Menu');

//     const filterBar = tab === 1 ? overview : tab === 2 ? orderOnline : tab === 3 ? review : tab === 4 ? photos : tab === 5 ? menu : null
//     return (
//         <>
//             <div className={css.menu}>
//                 <div onClick={() => activeTab(1)} className={`${css.menuTxt} ${tab === 1 ? css.menuTxtActive : ""}`}>Overview</div>
//                 <div onClick={() => activeTab(2)} className={`${css.menuTxt} ${tab === 2 ? css.menuTxtActive : ""}`}>Order Online</div>
//                 <div onClick={() => activeTab(3)} className={`${css.menuTxt} ${tab === 3 ? css.menuTxtActive : ""}`}>Reviews</div>
//                 <div onClick={() => activeTab(4)} className={`${css.menuTxt} ${tab === 4 ? css.menuTxtActive : ""}`}>Photos</div>
//                 <div onClick={() => activeTab(5)} className={`${css.menuTxt} ${tab === 5 ? css.menuTxtActive : ""}`}>Menu</div>
//             </div>
//             <div className='flex bg-gray-500 text-white flex-col gap-2 w-2/4 m-auto list-none px-5 rounded' >
//                 {filterBar && filterBar.map((Elm) => <div key={Math.random()} >{Elm.description}</div>)}
//             </div>
//         </>
//     )
// };
