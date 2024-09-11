import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ info }) => {
  return (
    <Link
      className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-lg hover:shadow-xl transition duration-300"
      to={`/product/${info.id}`}
    >
      <div className="bg-white rounded-lg overflow-hidden">
        <motion.div
          className="block relative h-48 rounded overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={info.thumbnail}
          />
        </motion.div>
        <div className="mt-4 p-4 gap-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {info.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {info.title}
          </h2>
          <p className="mt-1 text-lg font-bold text-green-500">${info.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;