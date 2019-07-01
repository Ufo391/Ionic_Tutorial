import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ExerciseModel } from "../../pages/planer2/exercise.model";
import { ElementModel } from "../../pages/planer2/element.model";

@Injectable({
  providedIn: "root"
})
export class ExercieseService {
  constructor(private http: HttpClient) {}

  createExercise(exercise: ExerciseModel, auth): Observable<ExerciseModel> {
    return this.http.post<ExerciseModel>(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung?authtoken=" +
        auth,
      exercise
    );
  }

  updateExercise(exercise: ExerciseModel, auth) {
    return this.http.put(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/" +
        exercise.id +
        "?authtoken=" +
        auth,
      exercise
    );
  }

  deleteExercise(id: number, auth) {
    return this.http.delete(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/" +
        id +
        "?authtoken=" +
        auth
    );
  }

  getExercise(id: number, auth): Observable<ExerciseModel> {
    return this.http.get<ExerciseModel>(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/" +
        id +
        "?authtoken=" +
        auth
    );
  }

  getExercises(auth): Observable<ExerciseModel[]> {
    return this.http.get<ExerciseModel[]>(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung/own?authtoken=" +
        auth
    );
  }

  getPublicExercises(auth): Observable<ExerciseModel[]> {
    return this.http.get<ExerciseModel[]>(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/Uebung" +
        "?authtoken=" +
        auth
    );
  }

  addElement(data, auth): Observable<ElementModel> {
    return this.http.post<ElementModel>(
      "http://ec2-52-59-195-168.eu-central-1.compute.amazonaws.com/api/uebungselement" +
        "?authtoken=" +
        auth,
      data
    );
  }
}
