import { Link } from "react-router-dom";

function Homepage() {

    const featuredProducts = [
        { id: 1, image: "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Product 1", price: 19.99 },
        { id: 2, image: "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Product 2", price: 29.99 },
        { id: 3, image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Product 3", price: 39.99 },
       
      ];
    return (
      <div>
        <section className="hero ">
          <img   src="https://c1.wallpaperflare.com/preview/399/434/452/welcome-sign-signage-background-sign.jpg" alt="Hero Image"
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}  />
          <h1 className="mb-2 font-sans md:font-serif text-center text-4xl font-medium mt-5 underline dark:text-black">
            Welcome to Our E-commerce Store
          </h1>
       
        </section>
        <div>
      
        <section className="featured-products">
  <h2 className="text-3xl font-bold mb-4 text-center">Featured Products</h2>
  <div className="flex flex-wrap justify-center">
    {featuredProducts.map((product) => (
      <div key={product.id} className="w-1/3 md:w-1/4 lg:w-1/5 p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    ))}
    
  </div>
</section>
<Link to={"./products"} 
  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
  style={{ display: 'flex', justifyContent: 'center' }}
>
  See More Products
</Link>
<hr />
<br />


<section className="call-to-action">
  <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
  <p className="text-lg text-gray-600 mb-4 text-center">Sign up for our newsletter to receive exclusive offers and updates.</p>
  <form className="flex flex-wrap justify-center">
    <input 
      type="email" 
      placeholder="Enter your email address" 
      className="w-full md:w-1/2 lg:w-1/3 p-4 pl-10 text-sm text-gray-700"
    />
    <button 
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      style={{ marginLeft: '10px' }}
    >
      Subscribe
    </button>
  </form>
</section>
    </div>
      </div>

    );
  }
export default Homepage;