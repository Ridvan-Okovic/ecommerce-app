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
      Details
    </div>
  );
};

export default ProductDetailsPage;
