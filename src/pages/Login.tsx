const Login = () => {
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

          <form>
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
