import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ValuesComponent } from './pages/values/values.component';
import { FormComponent } from './pages/form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
     path:'',
     pathMatch:'full',
     redirectTo:'data'
  },
  {
    path:'data',
    component:FormComponent
  },
  {
    path:'show',
    component:ValuesComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
