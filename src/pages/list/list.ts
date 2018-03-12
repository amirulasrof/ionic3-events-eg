import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(private events: Events) {}

  logout() {
    this.events.publish('user:logout');
  }
}