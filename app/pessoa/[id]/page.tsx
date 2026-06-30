"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPessoa } from "./actions";
import { PenBox } from "lucide-react";
import Link from "next/link";
import { Pessoa } from "@/interfaces/pessoas";


export default function PessoaPage() {
    const { id } = useParams();
    const [pessoa, setPessoa] = useState({} as Pessoa);

    useEffect(() => {
        getPessoa(Number(id)).then(response => setPessoa(response));
    }, [id]);

    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto">
                <div className="flex gap-1">
                    <p > nome: {pessoa.nome} </p>
                    <Link href={`/pessoa/${id}/editar`}>
                        <PenBox />

                    </Link>
                </div>

                <p >nome: {pessoa.nome}</p>
                <p className="mt-10 mb-2">Gatos:</p>
                <ul className="flex flex-col gap-1 list-disc list-inside"
                    {...pessoa.gatos?.map((gato) => (
                        <li key={gato.id}>{gato.nome}</li>
                    ))}></ul>
            </div>
        </div>


    )
}