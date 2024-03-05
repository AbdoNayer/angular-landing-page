import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SectionHeadInfoComponent } from '../../component/section-head-info/section-head-info.component';
import { SectionAboutComponent } from '../../component/section-about/section-about.component';
import { SectionHowWorkComponent } from '../../component/section-how-work/section-how-work.component';
import { SectionDownloadAppComponent } from '../../component/section-download-app/section-download-app.component';



@NgModule({
  declarations: [
    HomeComponent,
    SectionHeadInfoComponent,
    SectionAboutComponent,
    SectionHowWorkComponent,
    SectionDownloadAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
