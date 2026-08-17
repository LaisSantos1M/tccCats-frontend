import PawCursor from "@/components/PawCursor";
import GatoItem from "./../../components/GatoItem";
import { getGatos } from "../gatos/actions";
import Link from "next/link";

export default async function DoadorPage() {
  const gatos = await getGatos();

  return (
    <div className="inicio">
      <div className="faixa-topo"></div>
      <div className="faixa-baixo"></div>
      <div className="listaGato">
        <div className="palavras"  >
        <ul className=" flex flex-col gap-2  items-center " >
          {gatos.map(gato => (
            <GatoItem key={gato.id} nome={gato.nome} id={gato.id} />
          ))}

        </ul>
      </div>
      </div>
      
    <Link href="/" className="voltar">
                Voltar
            </Link>
      <PawCursor />
   

    </div>
    
  );
}