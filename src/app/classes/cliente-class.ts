export class ClienteClass {
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

    constructor() {
        this.id = 0;
        this.ragioneSociale = '';
        this.partitaIva = '';
        this.tipoCliente = '';
        this.email = '';
        this.pec = '';
        this.telefono = '';
        this.nomeContatto = '';
        this.cognomeContatto = '';
        this.telefonoContatto = '';
        this.emailContatto = '';
        this.indirizzoSedeOperativa = {
            id : 0,
            via : '',
            civico: '',
            cap: '',
            localita: '',
            comune : {
                id : 0,
                nome : '',
                provincia : {
                    id : 0,
                    nome : '',
                    sigla : ''
                }
            }
        }
        this.indirizzoSedeLegale = {
            id : 0,
            via : '',
            civico : '',
            cap : '',
            localita : '',
            comune: {
                id : 0,
                nome : '',
                provincia : {
                    id : 0,
                    nome : '',
                    sigla : ''
                }
            }
        };
        this.dataInserimento = '';
        this.dataUltimoContatto = '';
        this.fatturatoAnnuale = 0;

    }
}
