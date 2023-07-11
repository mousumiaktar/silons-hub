import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { productId } = useParams();
    const [pro, setPro] = useState({});
    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${productId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPro(data));

    }, [productId]);

    return (
        <div className='bg-gray-100 py-6 px-2'>
            <img className='h-[100px] justify-center mx-auto' src={pro?.image} alt="" />
            <div className='text-center'>
                <h2>{pro?.title}</h2>
                <p>{pro?.price}</p>
                <p><small>{pro?.ratting?.rate}</small></p>
                <p><small>{pro?.ratting?.count}</small></p>
            </div>
        </div>
    );
};

export default SingleProduct;