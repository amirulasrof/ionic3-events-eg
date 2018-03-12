import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  root = HomePage;
  loggedIn= false;

  loggedInPages = [
    { title: 'Logout', component: ListPage }
  ];

  loggedOutPages = [
    { title: 'Login', component: HomePage}
  ];
  
  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private events:Events) {

    this.listenToLoginEvents();
  }

  openPage(_: any, page: any) {
    // find the nav component and set what the root page should be
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.loggedIn = true;
    });

    this.events.subscribe('user:logout', () => {
      this.loggedIn = false;
    });
  }
}
