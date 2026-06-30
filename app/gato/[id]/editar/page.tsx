"use client";

import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getGato, updateGato} from "../actions";
import { Gato } from "@/interfaces/gatos";

export default function GatoPage() {
    const { id } = useParams();
    const [gato, setGato] = useState({} as Gato);
    const router = useRouter();

    useEffect(() => {
        getGato(Number(id)).then(response => setGato(response));
    }, [id]);



    function handleChange(value: string | number, key: keyof Gato) {
        setGato(oldState => ({ ...oldState, [key]: value }))

    }

    async function handleUpdate(e: SubmitEvent) {
        e.preventDefault();
        const response = await updateGato(Number(id), gato);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/gato/${id}`);
    }



    return (
        <div className="h-screen w-screen font-bold flex flex-col gap-10 items-center">
            <form className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto"
                onSubmit={handleUpdate}
            >

                <div>
                    nome:
                    <input value={gato.nome} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "nome")} />
                </div>

                <div>
                    cor ou raça:
                    <input value={gato.cor_raca}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "cor_raca")} />

                </div>

                <div>
                    vacina:
                    <input value={gato.vacina}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "vacina")} />

                </div>

                 <div>
                    Número de telefone:
                    <input value={gato.numeroDeTelefone}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "numeroDeTelefone")} />

                </div>

                <button className="bg-red-400 text-white rounded-x1 px-10 py-2  cursor-pointer hover:opacity-80">
                    Editar
                </button>
            </form>

            <div className="bg-white rounded-xl h-[20%] overflow-y-auto flex text-black p-4 gap-1 w-[50%]" >

                <ul className="w-px h-full bg-black"></ul>
            </div>


            <button className="bg-black text-white rounded-xl px-10 py-2 cursor-pointer" >
                Salvar matrículas
            </button>

        </div>
    );
}