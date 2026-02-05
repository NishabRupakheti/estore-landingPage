import { useState } from "react"

interface LoginFormProps {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}


const LoginForm = ({ setIsLogin }: LoginFormProps) => {


    const login = () => {
        console.log("Logging in with", { emailOrPhone, password });
    }

    const [emailOrPhone, setEmailOrPhone] = useState<string | number>("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full max-w-md p-4">
            <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
            <p className="text-sm mb-8">Enter your details below</p>

            <form className="space-y-6">
                <input
                    type="text"
                    placeholder="Email or Phone Number"
                    className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-500 transition-colors"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-b border-gray-300 pb-2 outline-none focus:border-gray-500 transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>

            <div className="flex items-center justify-between mt-8">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium rounded py-3 px-12 transition-colors" onClick={login}>
                    Log In
                </button>
                <button className="text-red-500 hover:text-red-600 font-medium transition-colors">
                    Forget Password?
                </button>
            </div>

            <p className="text-center text-sm mt-6">
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="font-medium underline hover:text-red-500 transition-colors">
                    Sign Up
                </button>
            </p>
        </div>
    )
}

export default LoginForm    