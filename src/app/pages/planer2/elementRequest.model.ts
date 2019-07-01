import {Vektor} from './Vektor';

export class ElementRequestModel {
  constructor(public id: number,
              public typ: number,
              public bildtyp: number,
              public positionsVektor: Vektor,
              public richtungsVektor: Vektor,
              public uebungsID: number
  ) {
  }
}
