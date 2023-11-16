import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowappartComponent } from './showappart/showappart.component';

const routes: Routes = [

  {path: "" , redirectTo : "home" , pathMatch:"full"},
    {path:"home", component: ResidencesComponent},
    {path:"card", component: CardresidenceComponent},
    {path:"card/showappart/:id", component: ShowappartComponent},
    {path:"**", component: PageNotFoundComponent},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
