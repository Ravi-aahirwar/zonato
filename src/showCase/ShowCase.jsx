import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/navbar/Navbar'
import css from './ShowCase.module.css'
import filterCss from '../components/filterBox/FilterBox.module.css'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import filtersIcon from '/icons/filter.png'
import deliveryTimeIcon from '/icons/delivery-time.png'
import Collection from '../components/collection/Collection'
import CarouselUtil from '../components/carouselUtils/CarouselUtil'

import biryaniCImg from '/icons/Food/biryaniC.png';
import burgerImg from '/icons/Food/burger.png';
import chickenImg from '/icons/Food/chicken.png';
import friesImg from '/icons/Food/fries.png';
import homestyleImg from '/icons/Food/homestyle.png';
import noodelsImg from '/icons/Food/noodels.png';
import pannerImg from '/icons/Food/panner.png';
import pizzaImg from '/icons/Food/pizza.png';
import sandwichImg from '/icons/Food/sandwich.png';
import shawarmaImg from '/icons/Food/shawarma.png';
import kfcImg from '/icons/Brands/kfc.png';
import pizzahutImg from '/icons/Brands/pizzahut.png';
import scoopsImg from '/icons/Brands/scoops.png';
import crossIcon from '/icons/close.png'

import CircleCard1 from '../components/CircleCards/CircleCard1/CircleCard1'
import CircleCard2 from '../components/CircleCards/CircleCard2/CircleCard2'
import ProductCard from '../components/productListing/productCard'
import Products from '../components/productListing/Products'
import SearchError from '../components/filtererror/SearchError'
import LoaderDesign from '../Loader/LoaderDesign'

// Delivery Dinning Out and Night Life Data 
const categoryData = [
    {
        id: 1,
        name: "Delivery",
        active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
        backdrop: "rgb(252, 238, 192)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
        id: 2,
        name: "Dinning",
        active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        backdrop: "rgb(238, 238, 238)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
        id: 3,
        name: "Night life",
        active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop: "rgb(237, 244, 255)",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    },
]
const foodCardScroll = [
    {
        name: "Biryani",
        imgSrc: biryaniCImg
    },
    {
        name: "Burger",
        imgSrc: burgerImg
    },
    {
        name: "Chicken",
        imgSrc: chickenImg
    },
    {
        name: "Fries",
        imgSrc: friesImg
    },
    {
        name: "Home Style",
        imgSrc: homestyleImg
    },
    {
        name: "Noodles",
        imgSrc: noodelsImg
    },
    {
        name: "Panner",
        imgSrc: pannerImg
    },
    {
        name: "Pizza",
        imgSrc: pizzaImg
    },
    {
        name: "Sandwich",
        imgSrc: sandwichImg
    },
    {
        name: "Shawarma",
        imgSrc: shawarmaImg
    },
]

const brandsCardScroll = [
    {
        name: "KFC",
        imgSrc: kfcImg,
        time: "45"
    },
    {
        name: "Pizza Hut",
        imgSrc: pizzahutImg,
        time: "35"
    },
    {
        name: "Scoops",
        imgSrc: scoopsImg,
        time: "49"
    },
    {
        name: "KFC",
        imgSrc: kfcImg,
        time: "19"
    },
    {
        name: "Pizza Hut",
        imgSrc: pizzahutImg,
        time: "22"
    },
    {
        name: "Scoops",
        imgSrc: scoopsImg,
        time: "33"
    },
]
export default function ShowCase() {


    const [activeTab, setActiveTab] = useState();
    const [activeCollection, setActiveCollection] = useState();
    function handleClicked(items) {
        setActiveTab(items.name)
        setActiveCollection(items.name);
    }

    // sort by filters

    const [filteredText, setFilterText] = useState(false);
    const [crossFilter, setCrossFilter] = useState(false);
    const handleFilterClicked = (filterText) => {
        setFilterText(filterText)

    }
    const handleCross = () => {
        setFilterText(null)
        setCrossFilter(false)
        console.log(crossFilter)
    }

    // ------Search filter -----
    const [query, serQuery] = useState("");
    const [datas, setDatas] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)

    const handleChanged = (event) => {
        serQuery(event.target.value)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/products?page=${page}&query=${query}`);
            const newData = response.data;

            setDatas((prev) => [...prev, ...newData]);
            setLoading(false)
        } catch (error) {
            toast.error("something wrong with server try again after  some time !", error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleInfiniteScroll = () => {
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true)
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []);

    useEffect(() => {
        fetchData();
    }, [page, query]);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, [page, query]);



    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []);

    const filterItems = datas?.filter((myData) => myData.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    function filteredData(query, setDatas, filteredText) {
        let filteredProducts = setDatas
        if (query) {
            filteredProducts = filterItems
        }
        if (filteredText) {
            filteredProducts = filteredProducts.filter(
                ({ vegNonveg, rating, outdoor, open }) => (
                    vegNonveg === filteredText ||
                        Number(rating) >= 4 ? filteredText : null ||
                        outdoor === filteredText ||
                    open === filteredText
                ))
        }

        return filteredProducts
    }
    const filterResult = filteredData(query, datas, filteredText)
    const result = filterResult?.length > 0 ? (
        filterResult.map(
            ({ promoted, time, offB, proExtraB, off, proExtra, name, rating, imgSrc, rate, location }) => {
                return (
                    <ProductCard
                        key={Math.random()}
                        promoted={promoted}
                        time={time}
                        offB={offB}
                        proExtraB={proExtraB}
                        off={off}
                        proExtra={proExtra}
                        name={name}
                        rating={rating}
                        imgSrc={imgSrc}
                        rate={rate}
                        location={location}
                        link={`/restaurants/${name}/order`}
                    />
                )
            })
    ) : (
        <SearchError />
    )
    // set time out function
    useEffect(() => {
        const delay = 3000;
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, delay);
        return () => clearTimeout(timeoutId);
      }, []); 
     
    return (
        <>

            <div className={css.outerDiv} >
                <NavigationBar query={query} handleChanged={handleChanged} />
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
                <div className={css.showCaseDiv} >
                    <div className={css.innerCaseDiv} >
                        {
                            categoryData.map((items) => {
                                return (
                                    <div className={` ${css.caseDiv} ${activeTab === items.name ? css.caseBorder : ""}`}
                                        onClick={() => handleClicked(items)} key={items.id} >
                                        <div className={css.innerCatDiv}   >
                                            <div className={`${css.caseImgDiv} ${activeTab === items.name ? css.imgDivBgClr : ""}`} >
                                                <img src={activeTab === items.name ? items.active_img : items.inactive_img} className={css.img} alt='img' />
                                            </div>
                                            <div className={css.txtDiv} style={{ color: activeTab === items.name ? css.txtColor : "" }} >
                                                <div className={`${css.txt} ${activeTab === items.name ? css.txtColor : ""}`} > {items.name} </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {
                    activeCollection === "Delivery" ? <div className={css.innerDiv2}>
                        <div className={css.w7}>
                            <Collection />
                        </div>
                    </div> : null
                }
                <div className={css.innerDiv3}>
                    <div className={css.filtersDiv}>
                        <div className={filterCss.outerDiv}>
                            <div className={filterCss.IconBox}>
                                <img className={filterCss.leftIcon} src={filtersIcon} alt="icon" />
                                <div className={filterCss.Imgtext}>Filter</div>
                            </div>
                            <div className={filteredText === "Pure Veg" ? [filterCss.IconBox, filterCss.activeFilter].join(" ") : filterCss.IconBox}>
                                <img className={filterCss.leftIcon} src={deliveryTimeIcon} alt="icon" />
                                <div className={filterCss.Imgtext} onClick={() => handleFilterClicked("Pure Veg")}>Pure Veg</div>
                                {filteredText === "Pure Veg" ? (
                                    !crossFilter ? (
                                        <img onClick={handleCross} className={filterCss.CrossIcon} src={crossIcon} />
                                    ) : null
                                ) : null}
                            </div>
                            <div className={filteredText === "4.0" ? [filterCss.IconBox, filterCss.activeFilter].join(" ") : filterCss.IconBox}>
                                <div className={filterCss.Imgtext} onClick={() => handleFilterClicked("4.0")}>Rating: 4.0+</div>
                                {filteredText === "4.0" ? (
                                    !crossFilter ? (
                                        <img onClick={handleCross} className={filterCss.CrossIcon} src={crossIcon} />
                                    ) : null
                                ) : null}
                            </div>
                            <div className={filteredText === "Outdoor Seating" ? [filterCss.IconBox, filterCss.activeFilter].join(" ") : filterCss.IconBox} >
                                <div className={filterCss.Imgtext} onClick={() => handleFilterClicked("Outdoor Seating")}>Outdoor Seating</div>
                                {filteredText === "Outdoor Seating" ? (
                                    !crossFilter ? (
                                        <img onClick={handleCross} className={filterCss.CrossIcon} src={crossIcon} />
                                    ) : null
                                ) : null}
                            </div>
                            <div className={filteredText === "Serves Alcohal" ? [filterCss.IconBox, filterCss.activeFilter].join(" ") : filterCss.IconBox} >
                                <div className={filterCss.Imgtext} onClick={() => handleFilterClicked("Serves Alcohal")}>Serves Alcohal</div>
                                {filteredText === "Serves Alcohal" ?
                                    (
                                        !crossFilter ? (
                                            <img onClick={handleCross} className={filterCss.CrossIcon} src={crossIcon} />
                                        ) : null
                                    ) : null}
                            </div>
                            <div className={filteredText === "Open Now" ? [filterCss.IconBox, filterCss.activeFilter].join(" ") : filterCss.IconBox}>
                                <div className={filterCss.Imgtext} onClick={() => handleFilterClicked("Open Now")}>Open Now</div>
                                {filteredText === "Open Now" ?
                                    (
                                        !crossFilter ? (
                                            <img onClick={handleCross} className={filterCss.CrossIcon} src={crossIcon} />
                                        ) : null
                                    )
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    activeCollection === "Delivery" ? <div className={css.innerDiv4}>
                        <div className={css.w7}>
                            <div className={css.innerDiv4Title}>
                                Inspiration for your first order
                            </div>
                            <div className={css.rollerCarosuel}>
                                <CarouselUtil>
                                    {
                                        foodCardScroll?.map((val, id) => {
                                            return <div className={css.cardW} key={id} >
                                                <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
                                            </div>
                                        })
                                    }
                                </CarouselUtil>
                            </div>
                        </div>
                    </div> : null
                }

                {activeCollection === "Delivery" ? <div className={css.innerDiv5}>
                    <div className={css.w7}>
                        <div className={css.innerDiv5Title}>
                            Top brands for you
                        </div>
                        <div className={css.rollerCarosuel}>
                            <CarouselUtil>
                                {brandsCardScroll?.map((val, id) => {
                                    return <div className={css.cardW} key={id}>
                                        <CircleCard2 imgSrc={val.imgSrc} name={val.name} time={val.time} />
                                    </div>
                                })}
                            </CarouselUtil>
                        </div>
                    </div>
                </div> : null}
                <div className={css.innerDiv6}>
                    <div className={css.w7A}>
                        <div className={css.innerDiv6Title}>
                            {activeCollection === "Delivery" ? "Delivery Restaurants in " : activeCollection === "Dinning" ? "Dine-Out Restaurants in Bengaluru" : filteredText === "Pure Veg" ? "Pure Veg Restaurants in Bengaluru" : filteredText === "4.0" ? "Rating: 4+ Restaurants in Bengaluru" : filteredText === "Outdoor Seating" ? "Outdoor Seating Restaurants in Bengaluru" : filteredText === "Serves Alcohal" ? "Serves Alcohal Restaurants" : filteredText === "Open Now" ? "Open Now Restaurants " : activeCollection === "Night life" ? "Night life Restaurants in Bengaluru" : "Restaurants in Bengaluru"}
                        </div>
                        <div className={css.innerDiv6Body}>
                            <Products result={filteredText === "Serves Alcohal" ? <SearchError /> : result} />
                        </div>
                    </div>
                </div>
                {loading &&  <center><p>Loading...</p></center>  }
                <Footer />
                <ToastContainer />
            </div>
        </>
    )
}