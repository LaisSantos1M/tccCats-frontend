"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface CreateGato {
    nome: string;
    vacina: number;
    cor_raca: string;
    data_nascimento: Date;
    numeroDeTelefone: number;
    pessoas: string[];
}


export async function CreateGato(gato: CreateGato) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch("http://localhost:3000/gatos", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
            , "Content-Type": "application/json",
        },
        body: JSON.stringify(gato)
    });

    if (response.status === 201) {
        revalidateTag("listar", "max");
        return;
    }
    if (response.status === 401) {
        redirect("/login");

    }

    try {
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e);
        return "Erro ao cadastrar o gato"
    }

}