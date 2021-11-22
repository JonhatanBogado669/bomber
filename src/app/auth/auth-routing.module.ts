import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from '../layout/login-layout/login-layout.component';
import { SkeletonComponent } from '../layout/skeleton/skeleton.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [


  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'register',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  },
  {
    path: 'forgot-password',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: ForgotPasswordComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
