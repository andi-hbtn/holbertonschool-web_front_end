function ProductCard({ name, price, inStock }) {
    return (
        <div style={{ border: "1px solid purple", padding: "10px", margin: "5px" }}>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{inStock ? "In stock" : "Out of stock"}</p>
        </div>
    );
}

export default function SpreadPropsDemo() {

    const product = {
        name: "iPhone 17",
        price: 1200,
        inStock: true,
    };

    const laptop = {
        name: "Mackbook Pro",
        price: 2300,
        inStock: true,
    };

    return (
        <div>
            <h2>Spread Props Demo</h2>
            <ProductCard {...product} />
            <ProductCard {...laptop} inStock={false} />
        </div>
    );
}