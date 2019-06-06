import { UKategorie, USchwerpunkt } from '../services/enums/enums.service';
import { TrainingElement } from './training.element.model';

export interface Training {
    name: string;
    kategorie: UKategorie;
    schwerpunkte: USchwerpunkt[];
    minPlayer: number;
    isPublic: boolean;
    trainingElements: TrainingElement[];
}
