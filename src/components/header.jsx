import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Authentication";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/utils";
import { ThemeContext } from "../context/themeConex";

function Header() {
  const { user } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSignout = async () => {
    await signOut(auth);
  };

  return (
    <header
      className={`
        ${theme === "light" ? "bg-white text-black-600" : "bg-gray-800 text-white"}  
        body-font
      `}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className={`flex title-font font-medium items-center text-white mb-4 md:mb-0 ${theme === "light" ? "text-gray-600" : "text-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className={`${theme === "light" ? "text-gray-600" : "text-white"} ml-3 text-xl font-bold`}>
            {theme === "light" ? <span>LumSum</span> : <span style={{ color: "#fff" }}>LumSum</span>}
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
          <Link
            to="/"
            className={`hover:text-gray-300 ${theme === "light" ? "text-gray-600" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:text-gray-300 ${theme === "light" ? "text-gray-600" : "text-white"}`}
          >
            Products
          </Link>
          <button
  onClick={() => {
    setTheme(theme === "light" ? "dark" : "light");
  }}
  className={`bg-${theme === "light" ? "gray-200" : "gray-700"} 
             hover:bg-${theme === "light" ? "gray-300" : "gray-600"} 
             text-${theme === "light" ? "gray-800" : "white"} 
             py-1 px-3 rounded transition duration-300`}
>
  {theme === "light" ? "Make it Dark" : "Make it Light"}
</button>
          {user.islogin ? (
            <div className="flex items-center space-x-4">
              <span
                className={`${theme === "light" ? "text-gray-600" : "text-white"} ${
                  user.email ? "text-sm" : ""
                }`}
              >
                {user.email}
              </span>
              <button
                onClick={handleSignout}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded transition duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/signup"
                className={`hover:text-gray-300 ${theme === "light" ? "text-gray-600" : "text-white"}`}
              >
                Signup
              </Link>
              <Link
                to="/login"
                className={`hover:text-gray-300 ${theme === "light" ? "text-gray-600" : "text-white"}`}
              >
                Login
              </Link>
            </>
          )}
        </nav>
      </div>
      <hr className="border-gray-600 font-extrabold" />
    </header>
  );
}

export default Header;