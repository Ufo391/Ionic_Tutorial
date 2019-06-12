import { Injectable } from '@angular/core';

export enum Merkmale {
  GROESSE,
  GEWICHT,
  SCHUSSKRAFT,
  SCHUSSTECHNIK,
  RECHTER_FUSS,
  LINKER_FUSS,
  ANGRIFFSKOPFBALL,
  VERTEIDIGUNGSKOPFBALL,
  KURZPASSSPIEL,
  LANGPASSSPIEL,
  FLANKEN,
  EINZEL_VERTEIDIGUNG,
  EINZEL_ANGRIFF,
  TAKTISCHES_VERHALTEN_ANGRIFF,
  TAKTISCHES_VERHALTEN_VERTEIDIGUNG,
  BALLAN_UND_MITNAHME,
  DRIBBELTEMPO,
  TORWARTSPIEL_STRAFRAUM,
  TORWARTSPIEL_HECHTEN_L_SEITE,
  TORWARTSPIEL_HECHTEN_R_SEITE,
  TORWARTSPIEL_FANGEN,
  TORWARTSPIEL_FAUSTEN,
  TORWARTSPIEL_ABSTOSS,
  TORWARTSPIEL_ABSCHLAG,
  TORWARTSPIEL_WERFEN
}

export enum Lizenz {
  C_LIZENZ,
  B_LIZENZ,
  A_LIZENZ,
  UEFA_JUGENDCOACH,
  FUSSBALLLEHRER
}

export enum UKategorie {
  AUFWAERMEN,
  SPIELFORM,
  PASSUEBUNG,
  DRIBBELUEBUNG,
  KOORDINATION,
  KONDITION,
  TORSCHUSS,
  KRAFTUEBUNG
}

export enum USchwerpunkt {
  PASSSPIEL,
  BALLAN_UND_MITNAHME,
  TORSCHUSS,
  EINZEL_ANGRIFF,
  EINZEL_VERTEIDIGUNG,
  UEBERZAHL_ANGRIFF,
  UEBERZAHL_VERTEIDIGUNG,
  UNTERZAHL_ANGRIFF,
  UNTERZAHL_VERTEIDIGUNG,
  TAKTIK,
  FLANKEN
}

export enum UElementTyp {
  BALL,
  HUETCHEN,
  TOR,
  SPIELER,
  TORWART,
  GESTRICHELTER_PFEIL,
  DURCHGEZOGENER_PFEIL,
  GESCHWUNGENER_PFEIL,
  STANGE,
  HUERDE
}

export enum TAltersklasse {
  U5,
  U6,
  U7,
  U8,
  U9,
  U10,
  U11,
  U12,
  U13,
  U14,
  U15,
  U16,
  U17,
  U18,
  U19,
  U21,
  HERREN,
  DAMEN,
  UE32,
  UE40,
  UE50
}

export enum TLiga {
  KREISLIGA,
  KREISKLASSE,
  BEZIRKSLIGA,
  LANDESLIGA,
  VERBANDSLIGA,
  OBERLIGA,
  REGIONALLIGA,
  BUNDESLIGA3,
  BUNDESLIGA2,
  BUNDESLIGA1
}

export enum MerkmalTyp {
  DUMMY
}

@Injectable({
  providedIn: 'root'
})

export class EnumsService {

  constructor() {

    this.altersklassenMap = this.buildEnumMap(TAltersklasse);    
  }

  Hier weiter machen --> Ummappen von ENUM auf HashMap um einfacherer Verknüpfung auf Page zu implementieren bei Auswahl der jweiligen Altersklasse

  public altersklassen: Map<string, TAltersklasse>;

  private buildEnumMap<T>(_enum: T) {
    let result: Map<string, T>;
    let key: string;
    for (const value in _enum) {
      debugger;
      key = "" + _enum[value];
      result.set(key,value);
      debugger;
    }

    return result;
  }

}
