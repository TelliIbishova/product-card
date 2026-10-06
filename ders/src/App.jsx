import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image:
        "https://www.actualidadmotor.com/wp-content/uploads/2024/05/bmw-m4-cs-3-1200x720.jpg.webp",
      name: "BMW M4",
      price: 295000,
      category: "Sport"
    },

    {
      id: 2,
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi_RS7.jpg",
      name: "Audi RS7",
      price: 140000,
      category: "Sport"
    },

    {
      id: 3,
      image:
        "https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche_Panamera_Mk1_Facelift.jpg",
      name: "Porsche Panamera",
      price: 150000,
      category: "Luxury"
    },

    {
      id: 4,
      image:
        "https://kommunikasjon.ntb.no/data/images/00427/867f766c-c35f-44a0-82e3-942f00fa7af2.jpg",
      name: "Mercedes-AMG GT",
      price: 180000,
      category: "Luxury Sport"
    },

    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/MINI_F56_Hatch_Cooper_Blazing_Red_%283%29.jpg",
      name: "MINI Cooper",
      price: 87800,
      category: "Hatchback"
    },

    {
      id: 6,
      image:
        "https://www.lus.so/images/vehicles/2016-lamborghini-aventador-ht0069-01.webp",
      name: "Lamborghini Aventador",
      price: 850000,
      category: "Supercar"
    }
  ];

  return (
    <div className="container">
      <h1>Luxury Cars</h1>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;