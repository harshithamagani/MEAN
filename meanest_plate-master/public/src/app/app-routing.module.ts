import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { AddreviewComponent } from './addreview/addreview.component';


const routes: Routes = [
  {path:'', pathMatch:'full', component:DashboardComponent},
  {path:'new', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'add/review/:id', component:AddreviewComponent},
  {path:'show/:id', component:ShowComponent},
  {path:'**', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
