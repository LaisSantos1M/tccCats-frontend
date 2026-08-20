"use client";

import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getGato, updateGato } from "../actions";
import { Gato } from "@/interfaces/gatos";
import PawCursor from "@/components/PawCursor";
import Link from "next/link";

export default function GatoPage() {
    const { id } = useParams();

    const [gato, setGato] = useState({} as Gato);
    const [foto, setFoto] = useState<File | null>(null);

    const router = useRouter();

    useEffect(() => {
        getGato(Number(id)).then(response => {
            setGato(response);
        });
    }, [id]);

    function handleChange(
        value: string | number,
        key: keyof Gato
    ) {
        setGato(oldState => ({
            ...oldState,
            [key]: value
        }));
    }

    function handleFotoChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const arquivo = e.target.files?.[0];

        if (arquivo) {
            setFoto(arquivo);
        }
    }

    async function handleUpdate(
        e: SubmitEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("nome", gato.nome);
        formData.append("vacina", String(gato.vacina));
        formData.append("cor_raca", gato.cor_raca);

        formData.append(
            "data_nascimento",
            new Date(gato.data_nascimento).toISOString()
        );

        formData.append(
            "numeroDeTelefone",
            String(gato.numeroDeTelefone)
        );


        if (foto) {
            formData.append("foto", foto);
        }

        const response = await updateGato(
            Number(id),
            formData
        );

        if (response) {
            alert(response);
            return;
        }

        router.push(`/gato/${id}`);
    }

    return (
        <div>
            <div className="inicio">

                <div className="faixa-topo"></div>

                <div className="faixa-baixo"></div>

                <PawCursor />

                <form
                    className="items-center text-red-900 w-70 h-auto bg-white rounded-md shadow-md shadow-pink p-2 overflow-auto"
                    onSubmit={handleUpdate}
                >
                    <div className="listaGato2">

                        <div>
                            nome:

                            <input
                                value={gato.nome || ""}
                                className="bg-red-200 flex border"
                                onChange={(e) =>
                                    handleChange(
                                        e.target.value,
                                        "nome"
                                    )
                                }
                            />
                        </div>

                        <div>
                            cor ou raça:

                            <input
                                value={gato.cor_raca || ""}
                                className="bg-red-200 flex border"
                                onChange={(e) =>
                                    handleChange(
                                        e.target.value,
                                        "cor_raca"
                                    )
                                }
                            />
                        </div>

                        <div>
                            vacina:

                            <input
                                value={gato.vacina || ""}
                                className="bg-red-200 flex border"
                                type="number"
                                onChange={(e) =>
                                    handleChange(
                                        Number(e.target.value),
                                        "vacina"
                                    )
                                }
                            />
                        </div>

                        <div>
                            Número de telefone:

                            <input
                                value={gato.numeroDeTelefone || ""}
                                className="bg-red-200 flex border"
                                type="number"
                                onChange={(e) =>
                                    handleChange(
                                        Number(e.target.value),
                                        "numeroDeTelefone"
                                    )
                                }
                            />
                        </div>

                        <div>
                            Foto:

                            <input
                                className="bg-red-200 flex border"
                                type="file"
                                accept="image/*"
                                onChange={handleFotoChange}
                            />
                        </div>

                    </div>


                    <button
                        className="voltar"
                        type="submit"
                    >
                        Editar
                    </button>

                </form>

                <Link
                    href="/gatos"
                    className="voltar"
                >
                    Voltar
                </Link>

            </div>
        </div>
    );
}