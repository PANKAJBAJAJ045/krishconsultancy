const Login = () => {
   return (
      <div className="container mx-auto mt-48 flex items-center justify-center ">
         <div className="left mx-14 flex w-1/3 flex-col">
            <img src="./assets/images/fb.svg" className="w-72"></img>
            <p className="mx-8 text-2xl">
               Facebook helps you connect and share with the people in your
               life.
            </p>
         </div>
         <div className="right flex w-1/4 flex-col rounded-lg bg-white p-8 shadow-lg">
            <input
               autoComplete="off"
               type="text"
               className="my-2 h-12 rounded-lg border border-gray-200 px-4 outline-blue-600"
               name="email"
               placeholder="Email address or phone number"
               autoFocus={true}
               aria-label="Email address or phone number"></input>
            <input
               type="password"
               autoComplete="off"
               className="my-2 h-12 rounded-lg border border-gray-200 px-4 outline-blue-600"
               name="password"
               placeholder="Password"
               aria-label="Password"></input>
            <button
               className="my-2 rounded-lg bg-blue-500 py-3 text-xl font-bold text-white"
               name="login"
               type="submit">
               Log in
            </button>
            <span className="my-2 cursor-pointer text-center text-sm text-blue-600 hover:underline">
               Forgotten password?
            </span>
            <hr className="my-2" />
            <button
               className="mx-auto my-2 w-fit content-center rounded-lg bg-green-500 px-4 py-3 text-xl font-bold text-white"
               name="register"
               type="submit">
               Create new Account
            </button>
         </div>
      </div>
   );
};

export default Login;
