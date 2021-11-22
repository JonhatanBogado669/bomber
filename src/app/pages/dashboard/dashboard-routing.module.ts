import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: SkeletonComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
