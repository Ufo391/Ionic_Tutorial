import { UElementTyp } from '../services/enums/enums.service';
import { Vector } from './vector.model';

export interface TrainingElement {
    typ: number;
    Position: Vector;
    RichtungsLaenge: Vector;
}
