import LoginForm from  "@/components/LoginForm";

import { loginAction } from "./actions";
import PawCursor from "@/components/PawCursor";


export default function LoginPage(){
    return(
        <div className="inicio">
            <div className="mt-10 mb-10 text-5xl font-bold underline decoration-red-950 decoration-light-blue-700 flex gap-70 ">
           <h1>Login</h1>
           <PawCursor/>
            
            <LoginForm onSend={loginAction}/>
            </div>
        </div>
    )
}