import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }      from './users/users.component';
import {BalanceComponent} from "./balance/balance.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'balance', component: BalanceComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
