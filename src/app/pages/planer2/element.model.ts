import {Vektor} from './Vektor';

export class ElementModel {
  constructor(public id: number,
              public typ: number,
              public bildTyp: number,
              public positionsVektor: Vektor,
              public richtungsVektor: Vektor
  ) {
  }
}
