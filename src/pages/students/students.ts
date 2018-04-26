import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

   /**
   * 1 - Page Entering
   */

  /**
   * #1.1 - Runs before the view can enter. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can enter
   */
  ionViewCanEnter() {
    console.log('ionViewCanEnter()');

    return true;
  }

  /**
   * #1.2 - Runs when the page has loaded. This event only happens once per page being created. If a page leaves but is cached, then this event will not fire again on a subsequent viewing. The ionViewDidLoad event is good place to put your setup code for the page.
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad()');
    
  }

  /**
   * #1.3 - Runs when the page is about to enter and become the active page.
   */
  ionViewWillEnter() {
    console.log('ionViewWillEnter()');

  }
  
  /**
   * #1.4 - Runs when the page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
   */
  ionViewDidEnter() {
    console.log('ionViewDidEnter()');

  }

  /**
   * 2 - Page Leaving
   */

  /**
   * #2.1 Runs before the view can leave. This can be used as a sort of "guard" in authenticated views where you need to check permissions before the view can leave
   */
  ionViewCanLeave() {
    console.log('ionViewCanLeave()');

  }
  
  /**
   * #2.2 Runs when the page is about to leave and no longer be the active page.
   */
  ionViewWillLeave() {
    console.log('ionViewWillLeave()');

  }
  
  /**
   * #2.3 Runs when the page has finished leaving and is no longer the active page.
   */
  ionViewDidLeave() {
    console.log('ionViewDidLeave()');

  }
  
  /**
   * #2.4 Runs when the page is about to be destroyed and have its elements removed.
   */
  ionViewWillUnload() {
    console.log('ionViewWillUnload()');

  }

}
