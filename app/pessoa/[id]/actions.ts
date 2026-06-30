"use server"

import { cookies } from "next/headers";
import { Pessoa} from "@/interfaces/pessoas";
import { redirect } from "next/navigation";


export async function getPessoa(id: number) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:3000/pessoas/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        next: { tags: ["pegarDados"] }
    })

    if (response.status === 401) {
        redirect("/login");

    }
    try {
        const data = await response.json();
        return data as Pessoa;
    } catch (e) {
        console.error(e);
        return {} as Pessoa
    }

}

export async function updatePessoa(id: number, Pessoa: Pessoa) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:3000/Pessoas/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Pessoa)
    })

    if (response.status === 401) {
        redirect("/login");
    }


    try {
        const data = await response.json();
        return data as Pessoa;
    } catch (e) {
        console.error(e);
        return {} as Pessoa
    }

}
