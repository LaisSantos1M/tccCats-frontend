"use server"

import { cookies } from "next/headers";
import { Gato } from "@/interfaces/gatos";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function getGato(id: number) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/gatos/${id}`, {
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
        return data as Gato;
    } catch (e) {
        console.error(e);
        return {} as Gato
    }

}

export async function updateGato(id: number, gato: Gato) {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:3000/gatos/${id}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gato)
    })

    if (response.status === 401) {
        redirect("/login");
    }

    if (response.status === 200) {
        revalidateTag("pegarDados", "max");
        return;
    }
    try {
        const data = await response.json();

        return data;
    } catch (e) {
        console.error(e);
        return "Erro ao atualizar"
    }

}
