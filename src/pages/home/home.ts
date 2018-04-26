import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StudentsPage } from './../students/students';
import { TeachersPage } from './../teachers/teachers';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  studentsPage = StudentsPage;

  constructor(public navCtrl: NavController) {

  }

  /**
   * Go to TeachersPage calling the component
   */
  gotoTeachersPage() {
    this.navCtrl.push(TeachersPage);
  }

  /**
   * Go to SubjectsPage using Lazy Loading concept
   */
  gotoSubjectsPage() {
    this.navCtrl.push('SubjectsPage');
  }

}
