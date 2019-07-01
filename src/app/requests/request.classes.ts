export class LoginRequest {
  name: string;
  email: string;
  firebaseID: string;
}

export class CreateTeamRequest {
  authtoken: string;
  name: string;
  altersklasse: number;
  liga: number;
}
