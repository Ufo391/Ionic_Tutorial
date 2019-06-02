import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from '../services/alert/alert.service';

@Component({
  selector: "app-overview",
  templateUrl: "./overview.page.html",
  styleUrls: ["./overview.page.scss"]
})
export class OverviewPage implements OnInit {
  constructor(private router: Router, private alertService: AlertService) { }

  ngOnInit() { }

  showAdress() {
    this.alertService.showInformation('Anschrift:', 'Musterstraße 3b<br/> 12345 Musterstadt');
  }
}
