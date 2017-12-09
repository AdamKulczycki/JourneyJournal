import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';

// Pages
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { AddJourneyPage } from '../pages/addJourney/addJourney';
import { DetailsJourneyPage } from '../pages/detailsJourney/detailsJourney';
import { EditJourneyPage } from '../pages/editJourney/editJourney';
import { HelpPage } from '../pages/help/help';
import { HowToAddJourneyPage } from '../pages/help/howToAddJourney/howToAddJourney';
import { JourneysPage } from '../pages/journeys/journeys';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';

// Plugins
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Providers
import { AccountService } from '../providers/account-service';
import { AuthService } from '../providers/auth-service';
import { ImageService } from '../providers/image-service';
import { JourneyService } from '../providers/journey-service';
import { StorageService } from '../providers/storage-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AccountPage,
    AddJourneyPage,
    DetailsJourneyPage,
    EditJourneyPage,
    HelpPage,
    HowToAddJourneyPage,
    JourneysPage,
    LoginPage,
    MapsPage,
    RegisterPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    Ng2CloudinaryModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AccountPage,
    AddJourneyPage,
    DetailsJourneyPage,
    EditJourneyPage,
    HelpPage,
    HowToAddJourneyPage,
    JourneysPage,
    LoginPage,
    MapsPage,
    RegisterPage,
    SettingsPage
  ],
  providers: [
    Camera,
    Facebook,
    File,
    FileTransfer,
    FilePath,
    Geolocation,
    Keyboard,
    SplashScreen,
    StatusBar,
    AccountService,
    AuthService,
    ImageService,
    JourneyService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
