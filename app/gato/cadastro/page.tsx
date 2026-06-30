"use client"
import { SubmitEvent, useState } from "react";
import { CreateGato } from "./actions";
import { useRouter } from "next/navigation";
import PawCursor from "@/components/PawCursor";
import Link from "next/link";


export default function GatoCadastroPage() {
    const [nome, setNome] = useState("");
    const [vacina, setVacina] = useState("0");
    const [cor_raca, setCor_Raca] = useState("");
    const [numeroDeTelefone, setNumero_De_Telefone] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const router = useRouter();

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const response = await CreateGato({
            nome,
            vacina: Number(vacina),
            cor_raca,
            data_nascimento: new Date(data_nascimento),
            numeroDeTelefone,

        });

        if (!response) {
            setNome("");
            setVacina("");
            setCor_Raca("");
            setData_nascimento("");
            router.push("/gatos");
            return;
        }

        alert(response);
    }
    return (

        <div className="w-screen h-screen flex flex-col items-center justify-center inicio ">
            <PawCursor />
            <h1 className="titulo">Adopt Marlis</h1>
            <form className="px-10 py-5 flex flex-col gap-2 bg-pink-950   rounded-lg"
                onSubmit={handleSubmit}>

                <input

                    className="formulario"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="formulario "
                    type="number"
                    placeholder="vacina"
                    value={vacina}
                    onChange={(e) => setVacina(e.target.value)}
                />
                <input
                    className="formulario"
                    type="text"
                    placeholder="cor_raca"
                    value={cor_raca}
                    onChange={(e) => setCor_Raca(e.target.value)}
                />
                <input
                    className="formulario "
                    type="date"
                    placeholder="data_nascimento"
                    value={data_nascimento}
                    onChange={(e) => setData_nascimento(e.target.value)}

                />
                <input
                    className="formulario "
                    type="int"
                    placeholder="numeroDeTelefone"
                    value={numeroDeTelefone}
                    onChange={(e) => setNumero_De_Telefone(e.target.value)}

                />

                <button className="botao-cadastro" type="submit">Cadastrar</button>
                <Link href="/gatos" className="mt-5 bg-white text-black px-4 py-2 rounded">
                    Voltar
                </Link>




            </form>

        </div>




    )
}