import Link from "next/link";

export default function DoadorPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-600">

      <h1 className="text-4xl font-bold text-purple-500 mb-10">
        Cadastro de Gato
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">

        <div className="w-20 h-6 border-4 border-green-500 mb-2"></div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-20 h-6 border-4 border-red-500"></div>
          <span>→</span>
        </div>

        <div className="flex gap-5">

          {/* FOTO */}
          <div className="w-32 h-40 border-4 border-black flex items-center justify-center text-3xl">
            Foto
          </div>

          {/* FORMULÁRIO */}
          <div className="flex flex-col gap-2">

            <input
              type="text"
              placeholder="Nome"
              className="border p-1"
            />

            <input
              type="text"
              placeholder="Vacinas"
              className="border p-1"
            />

            <input
              type="text"
              placeholder="Cor/Raça"
              className="border p-1"
            />

            <input
              type="date"
              className="border p-1"
            />

            <div className="flex gap-2 mt-2">

              <button
                type="button"
                className="border-2 border-red-500 px-2"
              >
                Não
              </button>

              <button
                type="button"
                className="border-2 border-green-500 px-2"
              >
                Sim
              </button>

            </div>

          </div>

        </div>

      </div>

      <Link
        href="/"
        className="mt-5 bg-white text-black px-4 py-2 rounded"
      >
        Voltar
      </Link>

    </div>
  );
}