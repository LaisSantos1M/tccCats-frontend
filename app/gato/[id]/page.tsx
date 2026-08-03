"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getGato } from "./actions";
import { Gato } from "@/interfaces/gatos";
import { PenBox } from "lucide-react";
import Link from "next/link";
import PawCursor from "@/components/PawCursor";
import Image from 'next/image'



export default function GatoPage() {
    const { id } = useParams();
    const [gato, setGato] = useState({} as Gato);

    useEffect(() => {
        getGato(Number(id)).then(response => setGato(response));
    }, [id]);

    return (
        <div className="inicio">
            <PawCursor />
            <div className="faixa-topo"></div>
            <p className="tituloInfoGato">Informações do gato</p>
            <div className="faixa-baixo"></div>
            <div className="botaoDeClicarNoGato">
                <div className="    ">
                    <div className="flex gap-1">
                        <p > nome: {gato.nome} </p>
                    </div>

                    <p>cor ou raça: {gato.cor_raca}</p>
                    <p>vacina: {gato.vacina}</p>
                    <p>número De Telefone: {gato.numeroDeTelefone}</p>
                    <Link href={`/gato/${id}/editar`}>
                        <PenBox />

                    </Link>

                </div>
            </div>
            <div>
                <Image src="/image/gato-dormindo.jpg" alt="Gatinho dormindo" width={400} height={300} />
            </div>
            <Link href="/gatos" className="voltar">
                Voltar
            </Link>
        </div>


    )
}