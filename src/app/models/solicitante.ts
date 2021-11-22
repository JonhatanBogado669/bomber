
export interface Collection {
    
    solicitante: Solicitante[];
    message: string;
}

export interface Entity {
    
    solicitante: Solicitante;
    message: string;
}

export interface Solicitante {
    
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    documento: number;
    servicio_id: number;
}