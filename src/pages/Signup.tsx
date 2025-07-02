import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
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

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 border-b border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="emailOrPhone" className="sr-only">
                Email or Phone Number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-2 border-b border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
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
};

export default SignUp;
