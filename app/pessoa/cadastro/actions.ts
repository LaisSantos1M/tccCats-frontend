"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {Pessoa} from "@/interfaces/pessoas";

interface CreatePessoa {
    nome: string;
    email: string;
    senha: string;

}

export async function CreatePessoa(pessoa: CreatePessoa) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch("http://localhost:8080/pessoas", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
            , "Content-Type": "application/json",
        },
        body: JSON.stringify(pessoa)
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
        return {} as Pessoa

    }
}