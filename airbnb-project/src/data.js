import Katie from "../src/images/Katie-Zaferes.jpeg";
import Wedding from "../src/images/wedding.jpg";
import Biking from "../src/images/mountain-biking.jpg";
import Piano from "../src/images/piano.jpg";
import Graphics from "../src/images/graphics.jpg";
import Surfing from "../src/images/surfing.jpg"




 const data = [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: Katie,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: Wedding,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: Biking,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },

    {
        id: 4,
        title: "Piano lessons",
        description: "If you have a love for the piano then join me as i'll teach you how to play the greatest masterpieces.",
        price: 150,
        coverImg: Piano,
        stats: {
            rating: 4.5,
            reviewCount: 20
        },
        location: "Online",
        openSpots: 5,
    },
    {
        id: 5,
        title: "Learn graphic designing",
        description: "Join me as I show you how to design, modify, and build awesome things with graphic design. Are you up for the challenge?",
        price: 80,
        coverImg: Graphics,
        stats: {
            rating: 5.0,
            reviewCount: 15
        },
        location: "Online",
        openSpots: 15,
    },
    {
        id: 6,
        title: "Group surfing in Honolulu",
        description: "Enjoy the beautiful beaches of Honolulu while learning at some of the best surf spots in the world",
        price: 100,
        coverImg: Surfing,
        stats: {
            rating: 4.0,
            reviewCount: 9
        },
        location: "Hawaii",
        openSpots: 1,
    }
]

export default data;