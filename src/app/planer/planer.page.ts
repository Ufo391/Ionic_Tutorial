import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: 'app-planer',
  templateUrl: './planer.page.html',
  styleUrls: ['./planer.page.scss'],
})
export class PlanerPage implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  showTrainingProperties() {
    this.alertService.showInformation("Eigenschaften", "Torschuss \n Kraftübung");
  }

}
