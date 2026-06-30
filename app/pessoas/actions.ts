"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { Pessoa } from "@/interfaces/pessoas";

export async function getPessoas() {

        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;

        const response = await fetch("http://localhost:3000/pessoas", {
            headers: {
                Authorization: `
                Bearer ${token}`,
            },
            next: { tags: ["listar"] },
        })

        if(response.status === 401){
            redirect("/login");
        }    try {
        if(response.status === 200){
            const data = await response.json();
            return data as Pessoa[];
        }

        console.error(response);
        return[];

    } catch(e){
        console.error(e);
        return[]
    }
}

export async function deletePessoas(id:number) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:3000/pessoas/${id}`, {
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
        } catch (e) {
            console.error(e);
            return "Erro ao deletar pessoa";
        }

}

