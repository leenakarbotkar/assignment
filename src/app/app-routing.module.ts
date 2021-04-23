import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
