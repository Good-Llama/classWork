import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientNameComponent } from '../client-name/client-name.component';
import { ClientMeetingComponent } from '../client-meeting/client-meeting.component';

export const routes: Routes = [
    { path: 'clientName', component: ClientNameComponent },
    { path: 'clientMeetings', component: ClientMeetingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
