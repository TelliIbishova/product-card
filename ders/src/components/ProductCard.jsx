function ProductCard({ image, name, price, category }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p className="price">
        {price.toLocaleString("az-AZ")} AZN
      </p>

      <p className="category">{category}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;