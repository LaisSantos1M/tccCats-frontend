"use client"
import { SubmitEvent, useState } from "react";
import { CreatePessoa } from "./actions";
import { useRouter } from "next/navigation";

export default function AlunoPessoasPage() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  
    
    const router = useRouter();

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const response = await CreatePessoa({
            nome,
            email,
            senha
             
        });

        if (!response) {
            setNome("");
            setEmail("");
            router.push("/cursos");
            return;
        }

        alert(response);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <form className="px-10 py-5 flex flex-col gap-2 bg-pink-950   rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                 <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button className="bg-white text-red-950 py-2 rounded-lg " type="submit">Cadastrar</button>

            </form>
        </div>
    )

}
