// paintings
import img1 from "../assets/img/arts folder/arts/art1.jpg";
import img2 from "../assets/img/arts folder/arts/art2.jpg";
import img3 from "../assets/img/arts folder/arts/art3.jpg";
import img4 from "../assets/img/arts folder/arts/art4.jpg";
import img5 from "../assets/img/arts folder/arts/art5.jpg";
import img6 from "../assets/img/arts folder/arts/art6.jpg";
import img7 from "../assets/img/arts folder/arts/art7.jpg";
import img8 from "../assets/img/arts folder/arts/art8.jpg";

// nft - 5
import img9 from "../assets/img/arts folder/nfts/nft1.jpg";
import img10 from "../assets/img/arts folder/nfts/nft2.jpg";
import img11 from "../assets/img/arts folder/nfts/nft3.jpg";
import img12 from "../assets/img/arts folder/nfts/nft4.jpg";
import img13 from "../assets/img/arts folder/nfts/nft5.jpg";
// 
// photographs
import img14 from "../assets/img/arts folder/photographs/photo1.jpg"
import img15 from "../assets/img/arts folder/photographs/photo2.jpg"
import img16 from "../assets/img/arts folder/photographs/photo3.jpg"
import img17 from "../assets/img/arts folder/photographs/photo4.jpg"
import img18 from "../assets/img/arts folder/photographs/photo5.jpg"
import img19 from "../assets/img/arts folder/photographs/photo6.jpg"
import img20 from "../assets/img/arts folder/photographs/photo7.jpg"
import img21 from "../assets/img/arts folder/photographs/photo8.jpg"
// 
// ceramics
import img22 from "../assets/img/arts folder/ceramics/ceramic1.jpg"
import img23 from "../assets/img/arts folder/ceramics/ceramic2.jpg"
import img24 from "../assets/img/arts folder/ceramics/ceramic3.jpg"
import img25 from "../assets/img/arts folder/ceramics/ceramic4.jpg"
import img26 from "../assets/img/arts folder/ceramics/ceramic5.jpg"

// handcraft
import img27 from "../assets/img/arts folder/handcrafts/handcraft1.jpg"
import img28 from "../assets/img/arts folder/handcrafts/handcraft2.jpg"
import img29 from "../assets/img/arts folder/handcrafts/handcraft3.jpg"
import img30 from "../assets/img/arts folder/handcrafts/handcraft4.jpg"
import img31 from "../assets/img/arts folder/handcrafts/handcraft5.jpg"
import img32 from "../assets/img/arts folder/handcrafts/handcraft6.jpg"





const productData = [
    {
        id: 1,
        img: img1,
        name: "Whispers of Autumn",
        artist: "Vinicius",
        price: "$500",
        category: "Painting",
        rating: 4
    },
    {
        id: 2,
        img: img2,
        name: "Ethereal Dreams",
        artist: "Sofia Chen",
        price: "$900",
        category: "Painting",
        rating: 3
    },
    {
        id: 3,
        img: img3,
        name: "Midnight Serenade",
        artist: "Alexander Petrov",
        price: "$800",
        category: "Painting",
        rating: 3
    },
    {
        id: 4,
        img: img4,
        name: "Sunset Reverie",
        artist: "Elena Rodriguez",
        price: "$1200",
        category: "Painting",
        rating: 5
    },
    {
        id: 5,
        img: img5,
        name: "Forgotten Memories",
        artist: "Aria Khan",
        price: "$100",
        category: "Painting",
        rating: 4
    },
    {
        id: 6,
        img: img6,
        name: "Whispers of the Sea",
        artist: "Billy",
        price: "$200",
        category: "Painting",
        rating: 5
    },
    {
        id: 7,
        img: img7,
        name: "Echoes of the Forest",
        artist: "Elena Rodriguez",
        price: "$2200",
        category: "Painting",
        rating: 5
    },
    {
        id: 8,
        img: img8,
        name: "Dancing Shadows",
        artist: "Aria Khan",
        price: "$5200",
        category: "Painting",
        rating: 5
    },
    //nft
    {
        id: 9,
        img: img9,
        name: "Digital Euphoria",
        artist: "Mind Freak",
        price: "$1200",
        category: "Nft",
        rating: 2
    },
    {
        id: 10,
        img: img10,
        name: "Virtual Visions",
        artist: "Mind Freak",
        price: "$2100",
        category: "Nft",
        rating: 3
    },
    {
        id: 11,
        img: img11,
        name: "Dreamscape",
        artist: "Mind Freak",
        price: "$1000",
        category: "Nft",
        rating: 4
    },
    {
        id: 12,
        img: img12,
        name: "Crypto Cosmos",
        artist: "Paper rex",
        price: "$2300",
        category: "Nft",
        rating: 2
    },
    {
        id: 13,
        img: img13,
        name: "Product Name",
        artist: "Paper rex",
        price: "$200",
        category: "Nft",
        rating: 4
    }
    // photographs
    ,
    {
        id: 14,
        img: img14,
        name: "Urban Solitude",
        artist: "Notail",
        price: "$200",
        category: "PhotogrCeramic",
        rating: 2
    },
    {
        id: 15,
        img: img15,
        name: "Ephemeral Light",
        artist: "Notail",
        price: "$2230",
        category: "PhotogrCeramic",
        rating: 3
    },
    {
        id: 16,
        img: img16,
        name: "Whispers of Nature",
        artist: "Notail",
        price: "$400",
        category: "PhotogrCeramic",
        rating: 4
    },
    {
        id: 17,
        img: img17,
        name: "Symphony",
        artist: "Asuna",
        price: "$1400",
        category: "PhotogrCeramic",
        rating: 3
    },
    {
        id: 18,
        img: img18,
        name: "Serenade",
        artist: "Paper",
        price: "$1200",
        category: "PhotogrCeramic",
        rating: 5
    },
    {
        id: 19,
        img: img19,
        name: "Melancholy",
        artist: "Asuna",
        price: "$2040",
        category: "PhotogrCeramic",
        rating: 5
    },
    {
        id: 20,
        img: img20,
        name: "Shadows of the Past",
        artist: "Asuna",
        price: "$2200",
        category: "PhotogrCeramic",
        rating: 4
    },
    {
        id: 21,
        img: img21,
        name: "Cityscape",
        artist: "Paper rex",
        price: "$700",
        category: "PhotogrCeramic",
        rating: 3
    }
    // cermaics
    ,
    {
        id: 22,
        img: img22,
        name: "Serenity Vase",
        artist: "Sofia",
        price: "$700",
        category: "Ceramic",
        rating: 4
    },
    {
        id: 23,
        img: img23,
        name: "Mystic Teapot",
        artist: "Sofia",
        price: "$1200",
        category: "Ceramic",
        rating: 5
    },
    {
        id: 24,
        img: img24,
        name: "Garden Bowl",
        artist: "Mei Lin",
        price: "$2700",
        category:"Ceramic",
        rating: 4
    },
    {
        id: 25,
        img: img25,
        name: "Elegance Plate",
        artist: "Mei Lin",
        price: "$100",
        category: "Ceramic",
        rating: 1
    },
    {
        id: 26,
        img: img26,
        name: "Mug Set",
        artist: "Javier",
        price: "$700",
        category: "Ceramic",
        rating: 3
    }
    // handcrafts
    ,
    {
        id: 27,
        img: img27,
        name: "Hand-Woven Basket",
        artist: "Kelora",
        price: "$50",
        category: "Handcraft",
        rating: 4
    },
    {
        id: 28,
        img: img28,
        name: "Wooden Jewelry Box",
        artist: "Kelora",
        price: "$400",
        category: "Handcraft",
        rating: 5
    },
    {
        id: 29,
        img: img29,
        name: "Silk Scarf",
        artist: "Opera",
        price: "$300",
        category: "Handcraft",
        rating: 4
    },
    {
        id: 30,
        img: img30,
        name: "Embroidery Home",
        artist: "Kelora",
        price: "$100",
        category: "Handcraft",
        rating: 2
    },
    {
        id: 31,
        img: img31,
        name: "Little plants",
        artist: "Javier",
        price: "$1700",
        category: "Handcraft",
        rating: 5
    },
    {
        id: 32,
        img: img32,
        name: "Dream Catcher",
        artist: "Kelora",
        price: "$200",
        category: "Handcraft",
        rating: 3
    }

]

export default productData

