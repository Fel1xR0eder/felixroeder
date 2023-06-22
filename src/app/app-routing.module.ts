import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'mywork', component: MyWorkComponent },
  { path: 'aboutme', component: LetsWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
