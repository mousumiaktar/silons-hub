import useProducts from "../hooks/useProducts";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {
                    products.map(product => <Product key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;