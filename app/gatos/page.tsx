import GatoItem from "./../../components/GatoItem";
import { getGatos } from "./actions";
import Link from "next/link";
import PawCursor from "../../components/PawCursor";

export default async function GatosPage() {
    const gatos = await getGatos();

    return (
        <main className="inicio">
            <PawCursor />
            <div >


                <h1 className="titulo" >
                    Lista de gatos</h1>
                <br />
            </div>

            <div className="w-50 h-50 bg-white text-black p-2 overflow-auto"  >
                <ul className=" flex flex-col gap-2 items-center " >
                    {gatos.map(gato => (
                        <GatoItem key={gato.id} nome={gato.nome} id={gato.id} />
                    ))}

                </ul>
            </div>
            <div >

            </div>

            <Link href="/gato/cadastro" className=" botao-cadastro1" >
                Cadastrar gatos
            </Link>
            <Link href="/" className="voltar">
                Voltar
            </Link>

        </main>
    )

}