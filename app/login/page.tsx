import LoginForm from  "@/components/LoginForm";

import { loginAction } from "./actions";

export default function LoginPage(){
    return(
        <div className=" w-screen h-screen flex flex-col items-center">
            <div className="mt-10 mb-10 text-5xl font-bold underline decoration-red-950 decoration-light-blue-700 ">
           <h1>Login</h1>
            
            <LoginForm onSend={loginAction}/>
            </div>


            
        </div>
    )
}