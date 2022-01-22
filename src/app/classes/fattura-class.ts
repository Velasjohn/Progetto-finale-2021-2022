export class FatturaClass {
    id?: number;
    data: string;
    numero: number;
    anno: number;
    importo: number;
    stato: {
        id?: number;
        nome: string;
    };
    cliente: {
        id?: number;
        ragioneSociale: string;
        partitaIva: string;
        tipoCliente: string;
        email: string;
        pec: string;
        telefono: string;
        nomeContatto: string;
        cognomeContatto: string;
        telefonoContatto: string;
        emailContatto: string;
        indirizzoSedeOperativa: {
            id?: number;
            via: string;
            civico: string;
            cap: string;
            localita: string;
            comune: {
                id?: number;
                nome: string;
                provincia: {
                    id?: number;
                    nome: string;
                    sigla: string;
                }
            }
        };
        indirizzoSedeLegale: {
            id?: number;
            via: string;
            civico: string;
            cap: string;
            localita: string;
            comune: {
                id?: number;
                nome: string;
                provincia: {
                    id?: number;
                    nome: string;
                    sigla: string;
                }
            }
        };
        dataInserimento: string;
        dataUltimoContatto: string;
        fatturatoAnnuale: number;
    }

    constructor() {
        this.id = 0;
        this.data = '';
        this.numero = 0;
        this.anno = 0;
        this.importo = 0;
        this.stato = {
            id: 0,
            nome: ''
        };
        this.cliente = {
            id : 0,
            ragioneSociale: '',
            partitaIva: '',
            tipoCliente: '',
            email: '',
            pec: '',
            telefono: '',
            nomeContatto: '',
            cognomeContatto: '',
            telefonoContatto: '',
            emailContatto: '',
            indirizzoSedeOperativa : {
                id: 0,
                via: '',
                civico: '',
                cap: '',
                localita: '',
                comune : {
                    id: 0,
                    nome: '',
                    provincia : {
                        id: 0,
                        nome: '',
                        sigla: ''
                    }
                }
            },
            indirizzoSedeLegale : {
                id : 0,
                via : '',
                civico : '',
                cap : '',
                localita : '',
                comune : {
                    id: 0,
                    nome: '',
                    provincia : {
                        id: 0,
                        nome: '',
                        sigla: ''
                    }
                }
            },
            dataInserimento: '',
            dataUltimoContatto: '',
            fatturatoAnnuale: 0
        }
    }
}