import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ElementModel} from './element.model';
import {ExerciseModel} from './exercise.model';
import {ExercieseService} from '../../services/exerciese/exerciese.service';
import {User} from '../../model/user.model';
import {Vektor} from './Vektor';
import {ElementRequestModel} from './elementRequest.model';
import { AuthService } from 'src/app/services/auth/athentification.service';


@Component({
  selector: 'app-planer2',
  templateUrl: './planer2.page.html',
  styleUrls: ['./planer2.page.scss'],
})
export class Planer2Page implements OnInit {

  @ViewChild('canvas') canvasEl: ElementRef;
  @ViewChild('cone') coneObj: ElementRef;
  @ViewChild('ball') ballObj: ElementRef;
  @ViewChild('flag') flagObj: ElementRef;
  @ViewChild('arrow1') arrow1: ElementRef;
  @ViewChild('arrow2') arrow2: ElementRef;
  @ViewChild('arrow3') arrow3: ElementRef;
  @ViewChild('bench') benchObj: ElementRef;
  @ViewChild('goal') goalObj: ElementRef;
  @ViewChild('pole') poleObj: ElementRef;
  @ViewChild('ring') ringObj: ElementRef;
  @ViewChild('playerB') playerBObj: ElementRef;
  @ViewChild('playerR') playerRObj: ElementRef;
  @ViewChild('half') halfBG: ElementRef;
  @ViewChild('full') fullBG: ElementRef;
  @ViewChild('green') greenBG: ElementRef;


  private canvas: any;
  private ctx: any;

  user: User;

  xDiff = 0;
  yDiff = 0;
  linePoint = 0;

  isMouseDown = false;
  draggedElement: number;
  errorMessage = '';

  exercises: Array<ExerciseModel>;
  currentExercise: ExerciseModel;
  exerciseSelected = false;

  constructor(private exerciseServise: ExercieseService, private authService: AuthService) {
  }

  ngOnInit() {
    this.draggedElement = null;
    this.canvas = this.canvasEl.nativeElement;
    this.canvas.width = 700;
    this.canvas.height = 1060;
    this.exercises = new Array<ExerciseModel>();
    this.currentExercise = new ExerciseModel(0, 0, false, '', new Array<ElementModel>(), 2, 0, []);
    this.user = this.authService.getUser();
    this.exerciseServise.getExercises(this.user.token).subscribe(data => {
      this.exercises = data;
    });

    this.initialiseCanvas();
  }

  initialiseCanvas() {
    if (this.canvas.getContext) {
      this.setupCanvas();
    }
  }

  setupCanvas() {
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = '#00A000';
    this.ctx.fillRect(0, 0, 700, 1060);
  }

  addElement(image: number, x1: number, y1: number) {
    if (!this.currentExercise.uebungsElemente) {
      this.currentExercise.uebungsElemente = new Array<ElementModel>();
    }
    let x2 = 0;
    let y2 = 0;
    switch (image) {
      case 0:
        x2 = 30;
        y2 = 30;
        break;
      case 1:
        x2 = 30;
        y2 = 100;
        break;
      case 2:
        x2 = 30;
        y2 = 30;
        break;
      case 3:
        x2 = 130;
        y2 = 30;
        break;
      case 4:
        x2 = 150;
        y2 = 50;
        break;
      case 5:
        x2 = 30;
        y2 = 100;
        break;
      case 6:
        x2 = 50;
        y2 = 30;
        break;
      case 7:
        x2 = 50;
        y2 = 75;
        break;
      case 8:
        x2 = 50;
        y2 = 75;
        break;

    }
    const e = new ElementRequestModel(0, 0, image, new Vektor(x1, y1, 0), new Vektor(x2, y2, 0), this.currentExercise.id);
    this.exerciseServise.addElement(e, this.user.token).subscribe(val => {
      this.currentExercise.uebungsElemente.push(val);
      this.drawImage();
    });
  }

  addLine(arrow: number, x1: number, y1: number, x2: number, y2: number) {
    if (!this.currentExercise.uebungsElemente) {
      this.currentExercise.uebungsElemente = new Array<ElementModel>();
    }
    const e = new ElementModel(0, 1, arrow, new Vektor(x1, y1, 0), new Vektor(x2, y2, 0));
    this.exerciseServise.addElement(e, this.user.token).subscribe(val => {
      this.currentExercise.uebungsElemente.push(val);
      this.drawImage();
    });
  }

  deleteElement(element: ElementModel) {
    const pos = this.currentExercise.uebungsElemente.indexOf(element);
    this.currentExercise.uebungsElemente.splice(pos, 1);
    this.drawImage();
  }

  drawImage() {
    this.setupCanvas();
    switch (this.currentExercise.hintergrund) {
      case 0:
        this.ctx.drawImage(this.halfBG.nativeElement, 0, 0, 700, 1060);
        break;
      case 1:
        this.ctx.drawImage(this.fullBG.nativeElement, 0, 0, 700, 1060);
        break;
      case 2:
        this.ctx.drawImage(this.greenBG.nativeElement, 0, 0, 700, 1060);
        break;
    }
    if (this.currentExercise.uebungsElemente) {
      for (const e of this.currentExercise.uebungsElemente) {
        if (e.typ === 0) {
          switch (e.bildTyp) {
            case 0:
              this.ctx.drawImage(this.coneObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 1:
              this.ctx.drawImage(this.flagObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 2:
              this.ctx.drawImage(this.ballObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 3:
              this.ctx.drawImage(this.benchObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 4:
              this.ctx.drawImage(this.goalObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 5:
              this.ctx.drawImage(this.poleObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 6:
              this.ctx.drawImage(this.ringObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 7:
              this.ctx.drawImage(this.playerBObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
            case 8:
              this.ctx.drawImage(this.playerRObj.nativeElement, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
              break;
          }
        } else {
          this.drawLine(e.bildTyp, e.positionsVektor.x, e.positionsVektor.y, e.richtungsVektor.x, e.richtungsVektor.y);
        }
      }
    } else {
      this.currentExercise.uebungsElemente = new Array<ElementModel>();
    }
  }

  onMouseDown(event) {
    this.isMouseDown = true;
    const canvasPosition = this.canvas.getBoundingClientRect();
    const x = event.clientX - canvasPosition.x;
    const y = event.clientY - canvasPosition.y;
    for (let pos = 0; pos < this.currentExercise.uebungsElemente.length; pos++) {
      const e = this.currentExercise.uebungsElemente[pos];
      if (e.typ === 0) {
        if (e.positionsVektor.x <= x && x <= e.positionsVektor.x + e.richtungsVektor.x) {
          if (e.positionsVektor.y <= y && y <= e.positionsVektor.y + e.richtungsVektor.y) {
            this.draggedElement = pos;
            this.xDiff = e.positionsVektor.x - x;
            this.yDiff = e.positionsVektor.y - y;
          }
        }
      } else {
        if (e.positionsVektor.x - 10 <= x && x <= e.positionsVektor.x + 10) {
          if (e.positionsVektor.y - 10 <= y && y <= e.positionsVektor.y + 10) {
            this.draggedElement = pos;
            this.linePoint = 0;
            this.xDiff = e.positionsVektor.x - x;
            this.yDiff = e.positionsVektor.y - y;
          }
        } else if (e.richtungsVektor.x - 10 <= x && x <= e.richtungsVektor.x + 10) {
          if (e.richtungsVektor.y - 10 <= y && y <= e.richtungsVektor.y + 10) {
            this.draggedElement = pos;
            this.linePoint = 1;
            this.xDiff = e.richtungsVektor.x - x;
            this.yDiff = e.richtungsVektor.y - y;
          }
        }
      }
    }
  }

  onMouseMove(event) {
    if (this.isMouseDown === true && this.draggedElement !== null) {
      const canvasPosition = this.canvas.getBoundingClientRect();
      const e = this.currentExercise.uebungsElemente[this.draggedElement];
      if (e.typ === 0) {
        e.positionsVektor.x = event.clientX - canvasPosition.x + this.xDiff;
        e.positionsVektor.y = event.clientY - canvasPosition.y + this.yDiff;
      } else {
        if (this.linePoint === 0) {
          e.positionsVektor.x = event.clientX - canvasPosition.x + this.xDiff;
          e.positionsVektor.y = event.clientY - canvasPosition.y + this.yDiff;
        } else {
          e.richtungsVektor.x = event.clientX - canvasPosition.x + this.xDiff;
          e.richtungsVektor.y = event.clientY - canvasPosition.y + this.yDiff;
        }
      }
      this.drawImage();
    }
  }

  onMouseUp(event) {
    this.isMouseDown = false;
    this.draggedElement = null;
  }

  drawLine(arrow: number, x1: number, y1: number, x2: number, y2: number) {
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();

    // const length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    const dx = x2 - x1;
    const dy = y2 - y1;
    let angle = Math.atan2(dx * -1, dy * -1);
    if (angle < 0) {
      angle = angle * -1;
    }
    if (x1 < x2) {
      angle = (180 * Math.PI / 180) + angle;
    } else {
      angle = (180 * Math.PI / 180) - angle;
    }

    this.ctx.save();
    this.ctx.translate(x1, y1);
    this.ctx.rotate(angle);
    let image;
    switch (arrow) {
      case 0:
        image = this.arrow1.nativeElement;
        break;
      case 1:
        image = this.arrow2.nativeElement;
        break;
      case 2:
        image = this.arrow3.nativeElement;
        break;
    }
    this.ctx.drawImage(image, -25 / 2, -25 / 2, 25, 25);
    this.ctx.restore();
  }

  setBackground(image: number) {
    this.currentExercise.hintergrund = image;
    this.drawImage();
  }

  saveExercise() {
    if (this.currentExercise.name !== '') {
      if (this.currentExercise.kategorie !== -1) {
        this.exerciseServise.updateExercise(this.currentExercise, this.user.token).subscribe(val => {
          console.log(val);
        });
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Bitte gib eine Kategorie an!';
      }
    } else {
      this.errorMessage = 'Bitte gib einen Namen an!';
    }
  }

  loadExercise(id: number) {
    this.exerciseServise.getExercise(id, this.user.token).subscribe(data => {
      const i = data.id;
      this.exerciseServise.getExercise(i, this.user.token).subscribe(val => {
        this.currentExercise = val;
        this.exerciseSelected = true;
        this.drawImage();
      });
    });
  }

  deleteExercise(exercise: number) {
    this.exerciseServise.deleteExercise(exercise, this.user.token).subscribe(val => {
    });
  }

  createExercise() {
    if (this.currentExercise.name !== '') {
      this.currentExercise = new ExerciseModel(0, 0, false, this.currentExercise.name, [], 2, 0, []);
      this.exerciseServise.createExercise(this.currentExercise, this.user.token).subscribe(e => this.currentExercise = e);
      this.exerciseSelected = true;
    }
  }

  containsFocus(id) {
    if (this.currentExercise.schwerpunkte.indexOf(id) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  onFocus(id: number) {
    if (this.currentExercise.schwerpunkte.indexOf(id) !== -1) {
      this.currentExercise.schwerpunkte.splice(this.currentExercise.schwerpunkte.indexOf(id), 1);
    } else {
      this.currentExercise.schwerpunkte.push(id);
    }
  }

  getExercises() {
    this.exerciseServise.getExercises(this.user.token).subscribe(data => {
      this.exercises = data;
    });
  }

  generateName(e: ElementModel) {
    let name = '';
    if (e.typ === 0) {
      switch (e.bildTyp) {
        case 0:
          name = 'Hütchen ' + e.id;
          break;
        case 1:
          name = 'Fahne ' + e.id;
          break;
        case 2:
          name = 'Ball ' + e.id;
          break;
        case 3:
          name = 'Bank ' + e.id;
          break;
        case 4:
          name = 'Tor ' + e.id;
          break;
        case 5:
          name = 'Stange ' + e.id;
          break;
        case 6:
          name = 'Ring ' + e.id;
          break;
        case 7:
          name = 'Spieler-Blau ' + e.id;
          break;
        case 8:
          name = 'Spieler-Rot ' + e.id;
          break;
      }
    } else {
      switch (e.bildTyp) {
        case 0:
          name = 'Durchgezogener Pfeil ' + e.id;
          break;
        case 1:
          name = 'Gestrichelter Pfeil ' + e.id;
          break;
        case 2:
          name = 'Geschwungener Pfeil ' + e.id;
          break;
      }
    }
    return name;
  }

}
