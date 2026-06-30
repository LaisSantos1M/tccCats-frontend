"use client";

import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getPessoa, updatePessoa } from "../actions";
import { Pessoa } from "@/interfaces/pessoas";

export default function PessoaPage() {
    const { id } = useParams();
    const [Pessoa, setPessoa] = useState({} as Pessoa);
    const router = useRouter();

    useEffect(() => {
        getPessoa(Number(id)).then(response => setPessoa(response));
    }, [id]);

    function handleChange(value: string | number, key: keyof Pessoa) {
        setPessoa(oldState => ({ ...oldState, [key]: value }))

    }

    async function handleUpdate(e: SubmitEvent) { 
        e.preventDefault();
        const response = await updatePessoa(Number(id), Pessoa);

        if (response) {
            alert(response);
            return;
        }

        router.refresh();
        router.push(`/pessoa/${id}`);
    }


    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <form className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto"
                onSubmit={handleUpdate}
            >

                <div>
                    nome:
                    <input value={Pessoa.nome} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "nome")} />
                </div>

              <div>
                    email:
                    <input value={Pessoa.email} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "email")} />
                </div>

                <button className="bg-red-400 text-white rounded-x1 px-10 py-2  cursor-pointer hover:opacity-80">
                    Editar
                </button>
            </form>
        </div>


    )
}