import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/utils";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("signin succesfully");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function handleSigninWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className=" container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-4xl font-bold mb-4 text-center">SignIn Form</h1>
      <form onSubmit={onSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="floating_email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            value={email}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block w-full py-2 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-md"
            placeholder="example@example.com"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="floating_password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            value={password}
            type="password"
            name="floating_password"
            id="floating_password"
            className="block w-full py-2 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-md"
            placeholder="Password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-500"
        >
          Sign In
        </button>
        <button
          onClick={handleSigninWithGoogle}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 border border-red-500"
        >
          Sign In with Google
        </button>
      </form>
    </div>
  );
}

export default LoginForm;