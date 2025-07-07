import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
const [formData, setFormData] = useState({
  fullname: '',
  email: '',
  password: ''
});
// Function to handle input changes
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
// Function to handle form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission logic here
  console.log("Form submitted:", formData);
};

return (
  <div className="flex flex-row h-screen gap-10">
    <img
      src="src/assets/images/dl.beatsnoop 1.png"
      alt="Shopping Illustration"
      className="rounded-lg pt-10 pb-18 w-2/3"
    />

    <div className="flex items-center justify-center p-8 ">
      <div className="bg-white p-8  w-full max-w-md">
        <h1 className="text-3xl  text-black mb-2 text-center lg:text-left">
          Create an account
        </h1>

        <p className="text-black mb-6 text-center lg:text-left">
          Enter your details below
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="fullname"
              placeholder="Name"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
          
              className="w-full px-4 py-2 border-b border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-b border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out mb-4"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full gap-2 flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            <div>
              <FcGoogle />
            </div>
            Sign up with Google
          </button>

          <p className="text-gray-600 text-center mt-6 text-sm gap-2">
            Already have an account?{" "}
            <a href="/login" className="text-black underline">

              Log in 
            
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
);
}
export default SignUp;