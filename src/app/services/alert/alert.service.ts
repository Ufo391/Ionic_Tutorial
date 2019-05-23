import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(public alertController: AlertController) {}

  public errorEmptyInputs() {
    this.presentAlert(
      'Vorgang abgebrochen:',
      'Bitte füllen Sie alle Eingabefelder aus!'
    );
  }

  public errorUnequalPasswordInputs() {
    this.presentAlert(
      'Vorgang abgebrochen:',
      'Ihre Passworteingaben stimmen nicht überein!'
    );
  }

  public errorUserMailNotFound(message: string) {
    this.presentAlert(
      'Vorgang abgebrochen:',
      message
    );
  }

  public showInformation(title: string, message: string) {
    this.presentAlert(
      title,
      message
    );
  }

  private async presentAlert(title: string, msg: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
