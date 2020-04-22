import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './Footer/footer.component';


const homeRoutes:Routes = [
  {path:'', component:HomeComponent}
]
@NgModule({
  declarations: [HomeComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent]

})
export class HomeModule { }
