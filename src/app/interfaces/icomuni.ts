export interface IComuni {
    content: Comuni[];
}

export interface Comuni {

    id: number,
    nome: string,
    provincia: {
        id: number,
        nome: string,
        sigla: string
    }

}
