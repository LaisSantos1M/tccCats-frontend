"use server"

import { cookies } from "next/headers";
import { Gato } from "@/interfaces/gatos";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function getGatos() {

    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;


    const response = await fetch("http://localhost:3000/gatos", {
        headers: {
            Authorization: `
            Bearer ${token}`,
        },
        next: { tags: ["listar"] },
    })

    if (response.status === 401) {
        redirect("/login");

    }
    try {
        if (response.status === 200) {
            const data = await response.json();
            return data as Gato[];
        }

        console.error(response);
        return [];

    } catch (e) {
        console.error(e);
        return []
    }
}


export async function deleteGato(id: number) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/gatos/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });


    if (response.status === 200) {
        revalidateTag("listar", "max");
        return;
    }

    try {
        const data = await response.json();
        return data;

    }catch(e){
        console.error(e);
        return "Erro ao deletar gato"
    }

}