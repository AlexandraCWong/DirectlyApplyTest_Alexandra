import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  COMPONENTS
import { FormatJobComponent } from './format-job/format-job.component';

const routes: Routes = [

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: FormatJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
