"use client"

import Link from "next/link";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { deletePessoas } from "@/app/pessoas/actions";

//tipagem 
interface Props {
    id: number;
    nome: string;
}


export default function PessoasItem({ nome, id }: Props) {
    const router = useRouter();

    function handleDelete() {
        deletePessoas(id);
        router.refresh();
    }

    return (
        <div className="flex gap-1">
            <Link href={`/curso/${id}`}>
                <li className="underline decoration-pink-700">
                    {nome}</li>
            </Link>
            <button className="text-red-900" onClick={handleDelete}
            >
                <Trash /></button>

        </div>

    );

}
