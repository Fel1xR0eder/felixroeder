import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { WelcomePartComponent } from './welcome-part/welcome-part.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'skillset', component: SkillsetComponent },
  { path: 'mywork', component: MyWorkComponent },
  { path: '', component: WelcomePartComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }