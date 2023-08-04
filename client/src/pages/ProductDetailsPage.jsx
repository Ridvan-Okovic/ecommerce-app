import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

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

  console.log(product);

  return (
    <div className="w-full h-[calc(100%-56px)] grid place-items-center">
      <div className="w-2/4 shadow-lg rounded flex">
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
            <div className="flex gap-2">
              <p className="bg-[#f8fafc] mt-4 px-2 py-[2px] rounded border shadow-sm text-[#64748b] capitalize">
                {product.company}
              </p>
              <p className="bg-[#f8fafc] mt-4 px-2 py-[2px] rounded border shadow-sm text-[#64748b] capitalize">
                {product.category}
              </p>
            </div>
          </div>
          <div>
            <span>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
