export class FatturaCliente {
    id: number;
    data: string;
    numero: number;
    anno: number;
    importo: number;
    stato: {
        id: number;
        nome: string;
    }
    cliente: {
        id: number;
    }

    constructor() {
        this.id = 0,
        this.data = '',
        this.numero = 0,
        this.anno = 0,
        this.importo = 0,
        this.stato = {
            id: 0,
            nome: ''
        }
        this.cliente = {
            id: 0
        }
    }

}
