import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { UpdateUsersComponent } from './modules/update-users/update-users.component';
import {SingUpComponent} from './modules/sing-up/sing-up.component';

const routes: Routes = [
  {
    path:"",
    component:DefaultComponent,
    children:[
      {
        path:"",
        component:DashboardComponent,
      },
      {
        path:"users-list/:_id",
        component:UsersListComponent,
      },
      {
        path:"update-users/:_id",
        component:UpdateUsersComponent,
      },
      {
        path:"add-user",
        component:SingUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
