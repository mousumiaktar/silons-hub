import useProducts from "../hooks/useProducts";
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className="bg-gray-200 py-4">
            <div className="container mx-auto">
                <div className="bg-white mt-8 p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl mb-2">Top Popular products</h2>
                        <button className="bg-orange-500 text-white px-4 py-1 rounded-md">see more</button>
                    </div>
                    <hr />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-5 ">

                        {
                            products?.slice(0,15).map(product => <Product key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;