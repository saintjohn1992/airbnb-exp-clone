import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Navbar";
import data from "./data"


const cards = data.map((items) => {
  return (
    <Card 
    img = {items.coverImg}
    rating = {items.stats.rating}
    reviewCount = {items.stats.reviewCount}
    location = {items.location}
    title = {items.title}
    price = {items.price}
    openSpots = {items.openSpots} />
    
  )
})


function App() {

  return (
    <div className="App">
    <Navbar />
    <Hero />
    <section className="cards-list">
    {cards}
    </section>
    </div>
  );
}

export default App;
