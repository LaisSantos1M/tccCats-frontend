"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getGato } from "./actions";
import { Gato } from "@/interfaces/gatos";
import { PenBox } from "lucide-react";
import Link from "next/link";


export default function GatoPage() {
    const { id } = useParams();
    const [gato, setGato] = useState({} as Gato);

    useEffect(() => {
        getGato(Number(id)).then(response => setGato(response));
    }, [id]);

    return (
        <div className="flex-1 w-screen font-bold flex flex-col items-center">
            <div className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto">
                <div className="flex gap-1">
                    <p > nome: {gato.nome} </p>  
                    <Link href={`/gato/${id}/editar`}>
                        <PenBox/>

                    </Link>
                </div>
              
                <p>cor_raca: {gato.cor_raca}</p>
                <p>vacina: {gato.vacina}</p>
            </div>
        </div>


    )
}