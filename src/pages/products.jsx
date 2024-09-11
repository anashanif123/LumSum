import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/productcard";
import Chip from "../components/chips";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    setLoading(true); // Set loading to true before fetching
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []); // Default to empty array if undefined
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [chosenCategory]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data || []); // Default to empty array if undefined
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter products based on category, price range, and search term
  const filteredProducts = products
    .filter((product) => {
      const inCategory =
        chosenCategory === "All" || product.category === chosenCategory;
      const inPriceRange =
        (minPrice === "" || product.price >= parseFloat(minPrice)) &&
        (maxPrice === "" || product.price <= parseFloat(maxPrice));
      const matchesSearchTerm =
        searchTerm === "" ||
        (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())); // Added check for product.name
      return inCategory && inPriceRange && matchesSearchTerm;
    });

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <h1 className="text-center text-3xl">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </h1>
      ) : (
        <div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-scroll mb-4"
          >
            <Chip
              isChosen={chosenCategory === "All"}
              title={"All"}
              onClick={() => setChosenCategory("All")}
            />
            {categories.map((category) => (
              <Chip
                isChosen={chosenCategory === category.slug}
                onClick={() => setChosenCategory(category.slug)}
                key={category.slug}
                title={category.name}
              />
            ))}
          </motion.div>

          <div className="mb-4">
            <div className="flex flex-col gap-2 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="border p-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  className="border p-2 flex-1"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  className="border p-2 flex-1"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap"
            >
              {filteredProducts.length ? (
                filteredProducts.map((data) => (
                  <ProductCard info={data} key={data.id} />
                ))
              ) : (
                <p className="text-center w-full">No products found.</p>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
