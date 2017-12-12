import { Component } from '@angular/core';
import { NavController, ToastController, MenuController, ViewController } from 'ionic-angular';

// Pages
import { JourneysPage } from '../journeys/journeys';

// Providers
import { JourneyService } from '../../providers/journey-service';
import { StorageService } from '../../providers/storage-service';

@Component({
  selector: 'page-addJourney',
  templateUrl: 'addJourney.html',
  providers: [JourneyService, StorageService]
})

export class AddJourneyPage {

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    this.viewCtrl.showBackButton(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  public journeyCredentials = {
    title        : '',
    description  : '',
    id_disc      : '',
    date_start   : '',
    date_end     : '',
    access_token : this.storageSvc.get('token')
  }
  public navOptions = {
    animate: true,
    animation: 'transition',
    duration: 600,
    direction: 'back'
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public menuCtrl: MenuController, public viewCtrl: ViewController, private journeySvc: JourneyService,
    private storageSvc: StorageService) {
  }

  // JOURNEYS //
  // Add
  public addJourney(){
    this.journeySvc.addJourney(this.journeyCredentials).subscribe(
      (data) => {
        this.navCtrl.setRoot(JourneysPage, {}, this.navOptions);
        this.presentToastSuccess(this.journeyCredentials.title + " was added");
      },
      (err) => {
        this.navCtrl.setRoot(JourneysPage, {}, this.navOptions);
        this.presentToastError(this.journeyCredentials.title + " wasn't added");
      }
    );
  };

  // NAV //
  // Back
  public back() {
    this.navCtrl.pop(this.navOptions);
  }

  // TOASTS //
  // Success
  public presentToastSuccess(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: "bottom",
      cssClass: "success"
    });
    toast.present();
  }

  // Error
  public presentToastError(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: "bottom",
      cssClass: "error"
    });
    toast.present();
  }
}
