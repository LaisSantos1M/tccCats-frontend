"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function CreateGato(formData: FormData) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch("http://localhost:8080/gatos", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
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
        return "Erro ao cadastrar o gato";
    }
}