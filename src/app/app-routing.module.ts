import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AduitComponent } from './aduit/aduit.component';
import { AuthGuard } from './auth.guard';
import { GetdataComponent } from './getdata/getdata.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  { path: '',   redirectTo: '/reg', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegComponent},
  {path:'getdata',component:GetdataComponent,
  canActivate:[AuthGuard]
},
{path:'audit',component:AduitComponent,
canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
