import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout/login-layout.component';



@NgModule({
  declarations: [  SkeletonComponent,
    SidebarComponent,
    NavigationComponent,
    FooterComponent,
    LoginLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    SkeletonComponent,
    SidebarComponent,
    NavigationComponent,
    FooterComponent,
    LoginLayoutComponent,
  ],
})
export class LayoutModule { }
