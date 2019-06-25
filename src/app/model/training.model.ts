import { UKategorie, USchwerpunkt } from '../services/enums/enums.service';
import { TrainingElement } from './training.element.model';

export interface Training {
    id?: number;
    name: string;
    minimaleTeilnehmer?: number;
    istOeffentlich: boolean;
    kategorie?: number;
    schwerpunkt?: number;
    elemente?: TrainingElement[];
}
