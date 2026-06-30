import {GatoData} from "./gatos";


export interface PessoaData{
    id: number;
    nome: string;
    email: string;
    senha: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Pessoa extends PessoaData{
    gatos: GatoData[];
}
