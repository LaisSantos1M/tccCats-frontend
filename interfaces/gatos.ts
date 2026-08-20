import {PessoaData} from "./pessoas"

export interface GatoData{
    id:number;
    nome:string;
    vacina:number;
    cor_raca:string;
    data_nascimento:Date;
    numeroDeTelefone:number;
    foto?:string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Gato extends GatoData{
    pessoas: PessoaData[];
}