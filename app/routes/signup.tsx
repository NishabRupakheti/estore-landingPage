import type { Route } from "./+types/home";
import Signupform from "~/components/signup/Signupform";
import LoginForm from "~/components/signup/Loginform";
import { useState } from "react";

// this is for seo purpose : page title and meta tags for the page
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Signup" },
        { name: "description", content: "This is a signup page" },
    ];
}

export default function Signup() {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left side - Image */}
                <div className="flex justify-center md:justify-end">
                    <img src="/app/images/signup.png" alt="signup image" className="max-w-full h-auto" />
                </div>
                
                {/* Right side - Form */}
                <div className="flex justify-center md:justify-start">
                    {isLogin ? <LoginForm setIsLogin={setIsLogin} /> : <Signupform setIsLogin={setIsLogin} />}
                </div>
            </div>
        </div>
    )
}