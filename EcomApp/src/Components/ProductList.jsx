import ProductCard from "./ProductCard";

export default function ProductList({products,addToCart}){
    return(
        <div>
            {products.map(product=>
            <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart} />
            )}
        </div>
    );
}


//product card ko render krne ke liye product list bnaya