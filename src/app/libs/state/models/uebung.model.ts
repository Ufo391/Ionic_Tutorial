import {Uebungselement} from './../models/uebungselement.model';

export interface Uebung {
    id?: number;
    name: string;
    minimaleTeilnehmer?: number;
    istOeffentlich: boolean;
    kategorie?: number;
    schwerpunkt?: number;
    elemente?: Uebungselement[];
}
