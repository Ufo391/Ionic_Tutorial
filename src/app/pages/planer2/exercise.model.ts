import { ElementModel } from './element.model';

export class ExerciseModel {
  constructor(public id: number,
              public kategorie: number,
              public istOeffentlich: boolean,
              public name: string,
              public uebungsElemente: ElementModel[],
              public hintergrund: number,
              public minimaleTeilnehmer: number,
              public schwerpunkte: number[]) {
  }
}
