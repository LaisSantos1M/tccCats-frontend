import Link from "next/link";
import PawCursor from "../components/PawCursor";

export default function Home() {
  return (
    <main className="inicio">

      <PawCursor />

      <div className="faixa-topo"></div>

      <div className="cabecalho">
        <h1 className="titulo">
          Adopt Marlis
        </h1>

        <div className="botoesLogin">
          <Link href={"pessoas/login"}>
            <div className="botao-login">
              Login
            </div>
          </Link>
        </div>
      </div>


      <div className="botoes">

        <Link href="/pessoas">
          <div className="botao-menu">
            Cadastro para adotar
          </div>
        </Link>

        <Link href="/gatos">
          <div className="botao-menu">
            Cadastro para doar
          </div>
        </Link>



      </div>

      <div className="faixa-baixo"></div>

    </main>
  );
}

