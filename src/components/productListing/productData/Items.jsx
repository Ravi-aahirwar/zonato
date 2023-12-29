
import biryaniSCImg from '/images/Food/biryani.png';
import biryaniSCImg2 from '/images/Food/biryani2.png';
import chapathiImg from '/images/Food/chapathi.png';
import fishImg from '/images/Food/fish.png';
import icecreamImg from '/images/Food/icecream.png';
import kfcSCImg from '/images/Food/kfc.png';
import pizzaSCImg from '/images/Food/pizza.png';
import udupiImg from '/images/Food/udupiimg.avif';
// 
const item = [
    {
        promoted: true,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Salz Burg",
        rating: '4.2',
        imgSrc: "https://b.zmtcdn.com/data/pictures/7/20630027/244247ce03ac7d9fe50cef49b667a5e0_o2_featured_v2.jpg",
        id:1,
        description:"Indiranagar, BangaloreSouth Indian, Chinese, Street Food, Beverages, North Indian, Shake",
        location:"Basavanagudi,Bangalore",
        rate:200
    },
    {
        promoted: true,
        time: "25",
        offB: true,
        proExtraB: true,
        off: "30",
        proExtra: "40",
        name: "Tum Tum Asia",
        rating: '4.0',
        imgSrc: "https://b.zmtcdn.com/data/pictures/4/20659904/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg",
        id:2,
        description:"Indiranagar, BangaloreSouth Indian, Chinese, Street Food, Beverages, North Indian, Shake",
        location:"Residency ,Banglore.",
        rate:200
    },
    {
        promoted: true,
        time: "25",
        offB: false,
        proExtraB: true,
        off: "30",
        proExtra: "40",
        name: "Sri Udupi Park",
        rating: '2.6',
        imgSrc: udupiImg,
        id:3,
        description:"South Indian, Chinese, Street Food, Beverages, North Indian, Shake",
        location:"Residency, Banglore",
        rate:300

    },
    {
        promoted: true,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Empire Restaurant",
        rating: '2.6',
        imgSrc: "https://b.zmtcdn.com/data/pictures/chains/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        id:4,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:240
    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Andhra Gunpowder",
        rating: '2.6',
        imgSrc: "https://b.zmtcdn.com/data/pictures/chains/9/19051939/1d6e0a9c4699e1c137ca3e4e35c84c4b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        id:5,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:1200
    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "McDonald's",
        rating: '2.6',
        imgSrc: "https://b.zmtcdn.com/data/pictures/chains/4/50674/56118540e4c57f70b9b9cbcc1206d7ec.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        id:6,
        description:"Burger, Fast Food, Desserts, Beverages",
        location:"MG Road, Bangalore",
        rate:200

    },
    {
        promoted: true,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Paradise Hotel",
        rating: '3.6',
        imgSrc: biryaniSCImg,
        id:7,
        description:"Chinese, North Indian, Rolls",
        location:"Yelahanka, Bangalore",
        rate:200

    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Mangal Hotel",
        rating: '2.6',
        imgSrc: biryaniSCImg2,
        id:8,
        description:"North Indian, Chinese, Biryani, South Indian, Beverages, Sichuan",
        location:"Koramangala, Bangalore",
        rate:400
    },
    {
        promoted: true,
        time: "30",
        offB: false,
        proExtraB: true,
        off: "30",
        proExtra: "40",
        name: "Chapathi Hotel",
        rating: '4.6',
        imgSrc: chapathiImg,
        id:9,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:400

    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Fish Mandi Hotel",
        rating: '4.9',
        imgSrc: fishImg,
        id:10,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:400

    },
    {
        promoted: true,
        time: "25",
        offB: false,
        proExtraB: true,
        off: "30",
        proExtra: "40",
        name: "Mangal Hotel",
        rating: '4.6',
        imgSrc: icecreamImg,
        id:11,
        description:"North Indian, Chinese, Biryani, South Indian, Beverages, Sichuan",
        location:"Koramangala 1st Block, Bangalore",
        rate:400

    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "KFCS Hotel",
        rating: '2.8',
        imgSrc: kfcSCImg,
        id:12,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:400

    },
    {
        promoted: true,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Pizza Hotel",
        rating: '3.2',
        imgSrc: pizzaSCImg,
        id:13,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:400

    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Fish Mandi Hotel",
        rating: '4.6',
        imgSrc: fishImg,
        id:14,
        description:"Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
        location:"Seshadripuram, Bangalore",
        rate:400
    },
    {
        promoted: false,
        time: "25",
        offB: true,
        proExtraB: false,
        off: "30",
        proExtra: "40",
        name: "Three Dots & A Dash",
        rating: '3.8',
        imgSrc: "https://b.zmtcdn.com/data/pictures/7/52287/1d3fe6090338825ca1e3ed145302f122_o2_featured_v2.jpg",
        id:15,
        description:"North Indian, Continental, Italian JP Nagar, Bangalore",
        location:" North Indian, Continental",
        rate:350
    },
    
 
]
export default item;