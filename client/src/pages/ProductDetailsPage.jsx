import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, increaseAmount } from '../features/cart/cartSlice';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(cartItems);

  useEffect(() => {
    async function getProduct() {
      try {
        const product = await axios.get(
          `http://localhost:3001/api/v1/products/${id}`
        );
        setProduct(product.data.product);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-[calc(100%-56px)] grid place-items-center font-montserrat text-justify">
      <div className="w-2/4 shadow-[0_1.5px_5px_0_rgba(0,0,0,0.15)] rounded flex">
        <img
          className="object-contain w-96 rounded-l"
          src={product.image}
          alt="img"
        />

        <div className="mx-8 my-4 flex flex-col items-start justify-between">
          <div>
            <div>
              <h3 className="text-center text-2xl capitalize font-medium">
                {product.name}
              </h3>
              <p className="mt-4 text-lg">{product.description}</p>
            </div>
            <div className="flex gap-2 items-center justify-between mt-4">
              <div className="flex gap-2">
                <p className="bg-[#f8fafc] px-2 py-[2px] rounded border shadow-sm text-[#64748b] capitalize">
                  {product.company}
                </p>
                <p className="bg-[#f8fafc] px-2 py-[2px] rounded border shadow-sm text-[#64748b] capitalize">
                  {product.category}
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  id="1"
                  className={`w-5 h-5 ${
                    Number(product.rating) >= 1
                      ? 'text-yellow-500'
                      : 'text-[#64738b]'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  id="2"
                  className={`w-5 h-5 ${
                    Number(product.rating) >= 2
                      ? 'text-yellow-500'
                      : 'text-[#64738b]'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  id="3"
                  className={`w-5 h-5 ${
                    Number(product.rating) >= 3
                      ? 'text-yellow-500'
                      : 'text-[#64738b]'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  id="4"
                  className={`w-5 h-5 ${
                    Number(product.rating) >= 4
                      ? 'text-yellow-500'
                      : 'text-[#64738b]'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  id="5"
                  className={`w-5 h-5 ${
                    Number(product.rating) >= 5
                      ? 'text-yellow-500'
                      : 'text-[#64738b]'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-medium text-[#64738b]">
                  {product.rating} out of 5
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end gap-4">
            <span className="text-2xl text-[#b49b8b]">${product.price}</span>
            <button
              onClick={() => {
                const cartItem = cartItems.find((item) => item.id === id);
                if (!cartItem) {
                  dispatch(
                    addToCart({
                      id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    })
                  );
                  return;
                }
                dispatch(increaseAmount({ id }));
              }}
              className="bg-[#f8fafc] px-2 py-[2px] rounded border shadow-sm text-[#64748b] capitalize"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
