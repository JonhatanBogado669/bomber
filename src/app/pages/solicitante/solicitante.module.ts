import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { SolicitanteRoutingModule } from './solicitante-routing.module';






@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    SolicitanteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class SolicitanteModule { }
