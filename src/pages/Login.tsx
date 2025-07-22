import { useState } from "react";
import axios from "axios";

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:4100/api/auth/login", formData);
      // Save token to localStorage
      localStorage.setItem("token", response.data.token);
      // Redirect to home page
      window.location.href = "/";
      // Handle successful login, e.g., save token, redirect, etc.
      console.log("Login successful:", response.data);
    } catch (err) {
      let message = "Signup failed";
      if (axios.isAxiosError(err)) {
        console.log(err)
        message = err.response?.data?.message || err.message || message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      alert(message);
    }
  };
  login();
  // Here you would typically handle the login logic, such as calling an API
  console.log("Form submitted:", formData);
};

  return (
    <div className="flex flex-row h-screen gap-10">
      <img
        src="src/assets/images/dl.beatsnoop 1.png"
        alt="Shopping Illustration"
        className="rounded-lg pt-10 pb-18 w-2/3"
      />

      <div className=" flex items-center justify-center p-8 ">
        <div className="bg-white p-8  w-full max-w-md ">
          <h1 className="text-3xl  text-black mb-2 text-center">
            Log in to Exclusive
          </h1>
          <p className="text-black mb-6 ">Enter your details below</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
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

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              >
                Log In
              </button>

              <a href="#" className="text-red-500 hover:underline text-sm">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
