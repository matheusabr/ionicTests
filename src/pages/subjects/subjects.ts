import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SUBJECT } from './../../mocks/subject.mock';


@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {
  info: Object;
  subjectsList: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectsPage');

    this.info = this.navParams.get('info');
    console.log(this.info);
    
  }

  getSubjects(keyword: string): Array<string> {
    console.log(keyword);
    
    this.subjectsList = SUBJECT;

    return this.subjectsList
      .filter(item => item.toLowerCase().startsWith(keyword.toLowerCase()));
  }

}
