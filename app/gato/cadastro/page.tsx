"use client";

import { SubmitEvent, useState } from "react";
import { CreateGato } from "./actions";
import { useRouter } from "next/navigation";
import PawCursor from "@/components/PawCursor";
import Link from "next/link";

export default function GatoCadastroPage() {
    const [nome, setNome] = useState("");
    const [vacina, setVacina] = useState("");
    const [cor_raca, setCor_Raca] = useState("");
    const [numeroDeTelefone, setNumero_De_Telefone] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [foto, setFoto] = useState<File | null>(null);

    const router = useRouter();

    function handleFotoChange(e: React.ChangeEvent<HTMLInputElement>) {
        const arquivo = e.target.files?.[0];

        if (arquivo) {
            setFoto(arquivo);
        }
    }

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("nome", nome);
        formData.append("vacina", vacina);
        formData.append("cor_raca", cor_raca);
        formData.append("data_nascimento", data_nascimento);
        formData.append("numeroDeTelefone", numeroDeTelefone);

        if (foto) {
            formData.append("foto", foto);
        }

        const response = await CreateGato(formData);

        if (!response) {
            setNome("");
            setVacina("");
            setCor_Raca("");
            setData_nascimento("");
            setNumero_De_Telefone("");
            setFoto(null);

            router.push("/gatos");
            return;
        }

        alert(response);
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center inicio">
            <div className="faixa-topo"></div>
            <div className="faixa-baixo"></div>
            <PawCursor />

            <h1 className="titulo">Adopt Marlis</h1>

            <form
                id="cadastro-gato"
                className="px-10 py-5 flex flex-col gap-2 bg-pink-950 rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    className="formulario"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    className="formulario"
                    type="number"
                    placeholder="Vacina"
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
                    className="formulario"
                    type="date"
                    value={data_nascimento}
                    onChange={(e) => setData_nascimento(e.target.value)}
                />

                <input
                    className="formulario"
                    type="tel"
                    placeholder="numeroDeTelefone"
                    value={numeroDeTelefone}
                    onChange={(e) =>
                        setNumero_De_Telefone(e.target.value)
                    }
                />

                <input
                    className="formulario"
                    type="file"
                    accept="image/*"
                    onChange={handleFotoChange}
                />
            </form>

            <button
                className="botao-cadastro"
                type="submit"
                form="cadastro-gato"
            >
                Cadastrar
            </button>

            <Link href="/gatos" className="voltar">
                Voltar
            </Link>

            <p className="palavras">
                *Atenção, não é obrigatorio colocar a foto*
            </p>
        </div>
    );
}