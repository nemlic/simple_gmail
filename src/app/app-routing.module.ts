import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentComponent } from './sent/sent.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { TrashComponent } from './trash/trash.component';
import { SpamComponent } from './spam/spam.component';
import { NewLabelComponent } from './new-label/new-label.component';

const routes: Routes = [
  {path:'compose', component:ComposeComponent},
  {path:'inbox', component:InboxComponent},
  {path:'sent', component: SentComponent},
  {path:'trash', component: TrashComponent},
  {path:'spam', component: SpamComponent},
  {path:'new-label', component: NewLabelComponent},
  {path:'spam', component: SpamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
