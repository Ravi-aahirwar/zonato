// import { createServer } from "miragejs"
import { createServer } from 'miragejs'


export function makeServer() {
    let server = createServer({
      routes() {
        this.namespace = '/api';
        this.get('/products', () => {
          return  [
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
                id: 1,
                description: "Indiranagar, BangaloreSouth Indian, Chinese, Street Food, Beverages, North Indian, Shake",
                location: "Basavanagudi,Bangalore",
                rate: 200,
                vegNonveg: "Pure Veg"

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
                id: 2,
                description: "Indiranagar, BangaloreSouth Indian, Chinese, Street Food, Beverages, North Indian, Shake",
                location: "Residency ,Banglore.",
                rate: 200,
                vegNonveg: "Pure Veg"

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
                imgSrc: "https://b.zmtcdn.com/data/pictures/chains/6/59916/5f19396d3386614ffafd24873602485b_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                id: 3,
                description: "South Indian, Chinese, Street Food, Beverages, North Indian, Shake",
                location: "Residency, Banglore",
                rate: 300,
                vegNonveg: "Pure Veg"


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
                id: 4,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 240
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
                id: 5,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 1200,
                vegNonveg: "Pure Veg"

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
                id: 6,
                description: "Burger, Fast Food, Desserts, Beverages",
                location: "MG Road, Bangalore",
                rate: 200

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
                imgSrc: "https://b.zmtcdn.com/data/pictures/2/18791092/6fe7ca6ab3fd62fd1ff50204c5c06b60_featured_v2.jpg?output-format=webp",
                id: 7,
                description: "Chinese, North Indian, Rolls",
                location: "Yelahanka, Bangalore",
                rate: 200

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
                imgSrc: "https://b.zmtcdn.com/data/pictures/chains/6/59916/5f19396d3386614ffafd24873602485b_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                id: 8,
                description: "North Indian, Chinese, Biryani, South Indian, Beverages, Sichuan",
                location: "Koramangala, Bangalore",
                rate: 400
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
                imgSrc: "https://b.zmtcdn.com/data/dish_photos/b75/a4068c018959df3a34ea6177a2709b75.jpg?output-format=webp",
                id: 9,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 400,
                vegNonveg: "Pure Veg"


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
                imgSrc: "https://b.zmtcdn.com/data/pictures/1/20450671/a991591e424dce71019dc15637f1715d_o2_featured_v2.jpg?output-format=webp",
                id: 10,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 400,
                vegNonveg: " Non Veg"

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
                imgSrc: "https://b.zmtcdn.com/data/dish_photos/083/e390bd60b309218c0e2f3f471b667083.jpg?output-format=webp",
                id: 11,
                description: "North Indian, Chinese, Biryani, South Indian, Beverages, Sichuan",
                location: "Koramangala 1st Block, Bangalore",
                rate: 400,
                vegNonveg: "Pure Veg"

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
                imgSrc: " https://b.zmtcdn.com/data/pictures/chains/4/19138934/9cbcfc8e97e418e560b62660c5b46e6d_featured_v2.jpg?output-format=webp",
                id: 12,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 400

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
                imgSrc: "https://b.zmtcdn.com/data/dish_photos/b3d/b1e0cfb13e59b35dbc0db4b4827edb3d.jpg?output-format=webp",
                id: 13,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 400,
                vegNonveg: "Pure Veg"


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
                imgSrc: "https://b.zmtcdn.com/data/pictures/1/20450671/a991591e424dce71019dc15637f1715d_o2_featured_v2.jpg?output-format=webp",
                id: 14,
                description: "Andhra, Biryani, South Indian, Desserts, Beverages, Hyderabadi",
                location: "Seshadripuram, Bangalore",
                rate: 400,
                Nonveg: " Non Veg",
                outdoor: "Outdoor Seating"
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
                id: 15,
                description: "North Indian, Continental, Italian JP Nagar, Bangalore",
                location: " North Indian, Continental",
                rate: 350,
                vegNonveg: "Pure Veg",
                outdoor: "Outdoor Seating"

            },
            {
                promoted: true,
                time: "25",
                offB: false,
                proExtraB: true,
                off: "30",
                proExtra: "40",
                name: "The Bier Library",
                rating: '4.8',
                imgSrc: "https://b.zmtcdn.com/data/pictures/9/18843699/fb66205bef846cabc8e0fcfdfabfaac5_featured_v2.jpg",
                id: 16,
                description: "North Indian, Biryani, Fast Food, Italian, BBQ, Bar Food, Desserts, Beverages",
                location: " Koramangala 6th Block, Bangalore",
                rate: 230,
                vegNonveg: "Pure Veg",
                outdoor: "Outdoor Seating",
                open: "Open Now"

            },
            {
                promoted: true,
                time: "25",
                offB: false,
                proExtraB: true,
                off: "30",
                proExtra: "40",
                name: "Magique",
                rating: '4.0',
                imgSrc: "https://b.zmtcdn.com/data/pictures/0/20540040/04ac68e98bd062fbaf9b66af8d233094_featured_v2.jpg",
                id: 17,
                description: "North Indian, Biryani, Fast Food, Italian, BBQ, Bar Food, Desserts, Beverages",
                location: " Koramangala 6th Block, Bangalore",
                rate: 230,
                vegNonveg: "Pure Veg",
                outdoor: "Outdoor Seating",
                open: "Open Now"
            },
            {
                promoted: true,
                time: "25",
                offB: false,
                proExtraB: true,
                off: "30",
                proExtra: "40",
                name: "Chin Lung Resto Bar",
                rating: '4.0',
                imgSrc: "https://b.zmtcdn.com/data/pictures/0/19583770/631c106a5a1e5b2129a83920afef6122_featured_v2.jpg",
                id: 18,
                description: "Bar Food, Chinese, North Indian",
                location: " Koramangala 4th Block, Bangalore",
                rate: 230,
                vegNonveg: "Pure Veg",
                outdoor: "Outdoor Seating",
                open: "Open Now"
            },


          ];
        });
      },
    });
  
    return server;
  }
