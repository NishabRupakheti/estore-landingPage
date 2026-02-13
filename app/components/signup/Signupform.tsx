import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

interface SignupformProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}


const Signupform = ({ setIsLogin }: SignupformProps) => {

  const registerAccount = () => {
    if (!name || !emailOrPhone || !password) {
      alert("Please fill all the fields");
      return;
    }
    console.log("Registering account with", { name, emailOrPhone, password });
  }


  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md p-4">
      <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
      <p className="text-sm mb-8">Enter your details below</p>

      <form className="space-y-6">
        <input
          suppressHydrationWarning
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-500 transition-colors"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          suppressHydrationWarning
          type="text"
          placeholder="Email or Phone Number"
          className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-500 transition-colors"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />

        <input
          suppressHydrationWarning
          type="password"
          placeholder="Password"
          className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-500 transition-colors"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium rounded py-3 mt-8 transition-colors" onClick={registerAccount} >
        Create Account
      </button>

      <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-black font-medium rounded py-3 mt-4 flex items-center justify-center gap-3 transition-colors">
        <FaGoogle className="text-lg" />
        Sign up with Google
      </button>

      <p className="text-center text-sm mt-6">
        Already have account?{' '}
        <button onClick={() => setIsLogin(true)} className="font-medium underline hover:text-red-500 transition-colors">
          Log In
        </button>
      </p>
    </div>
  )
}

export default Signupform