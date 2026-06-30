"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props{
    onSend: (email: string, password:string) => Promise<void |string>;
}

export default function LoginForm({onSend}: Props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, Setpassword] = useState("");

    async function handleSubmit(){
        const response = onSend(email, password);

        if(response){
            alert(response);
            return;
        }
        router.push("/")
    }
    return (
        <div className="mt-10 mb-10 rounded-mb shadow-md shadow-pink-300 p-2 bg-pink-200  w-150 h-90 flex flex-col items-center ">

            <input
                type="email"
                placeholder="Email"
                className=" text-black text-center "
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />

            <input
                type="password"
                placeholder="Senha"
                className=" text-black text-center"
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
            />


            <button className="bg-pink-700 text-white  mt-30 mb-10  cursor-pointer hover:opacity-80" 
          
          onClick={handleSubmit}
            
            >

                Entrar</button>
        </div>
    )
}