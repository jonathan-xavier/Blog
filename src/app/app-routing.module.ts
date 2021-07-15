import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [
  {path:'', redirectTo: '/login',pathMatch: 'full'},
  {path:'login', component: FormLoginComponent},
  {path:'noticias',component: NoticiasComponent, canActivate:[AuthGuard]},
  {path:'**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
