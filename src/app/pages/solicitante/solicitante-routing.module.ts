import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SkeletonComponent } from 'src/app/layout/skeleton/skeleton.component';


const routes: Routes = [
  { path: 'solicitante', redirectTo: 'solicitante/index', pathMatch: 'full'},
  {
    path: 'solicitante/index',
    component: SkeletonComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'solicitante/create',
    component: SkeletonComponent,
    children: [
      { path: '', component: CreateComponent }
    ]
  },
  {
    path: 'solicitante/:solicitanteId/edit',
    component: SkeletonComponent,
    children: [
      { path: '', component: EditComponent }
    ]
  },
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitanteRoutingModule { }
