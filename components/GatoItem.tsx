"use client"

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteGato } from "@/app/gatos/actions";
import { useRouter } from "next/navigation";

//tipagem 
interface Props {
    id: number
    nome: string;
}


export default function GatoItem({ nome, id }: Props) {
    const router = useRouter();

    function handleDelete(){
        deleteGato(id);
        router.refresh();
    }

    return (
        <div className="flex gap-1">
            <Link href={`/gato/${id}`}>
                <li className="underline decoration-pink-700 decoration-wavy">
                    {nome}</li>
            </Link>
            <button className="text-blue-300" onClick={handleDelete}
            >
                <Trash/></button>

        </div>

    );
}