import { UElementTyp } from '../services/enums/enums.service';
import { Vector } from './vector.model';

export interface TrainingElement {
    typ: UElementTyp;
    position: Position;
    vector: Vector;
}
