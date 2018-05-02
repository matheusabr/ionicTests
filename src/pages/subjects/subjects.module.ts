import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectsPage } from './subjects';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    SubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectsPage),
    AutoCompleteModule,    
  ],
})
export class SubjectsPageModule {}
