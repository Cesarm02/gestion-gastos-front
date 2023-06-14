import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { InicioUserComponent } from './pages/user/inicio-user/inicio-user.component';
import { ViewCuentaComponent } from './pages/user/cuenta/view-cuenta/view-cuenta.component';
import { AgregarCuentaComponent } from './pages/user/cuenta/agregar-cuenta/agregar-cuenta.component';
import { EditarCuentaComponent } from './pages/user/cuenta/editar-cuenta/editar-cuenta.component';
import { ViewUserCategoriaComponent } from './pages/user/categoria/view-user-categoria/view-user-categoria.component';
import { AddUserCategoriaComponent } from './pages/user/categoria/add-user-categoria/add-user-categoria.component';
import { ViewCuentaTransaccionComponent } from './pages/user/cuenta/view-cuenta-transaccion/view-cuenta-transaccion.component';
import { EditCategoriaComponent } from './pages/user/categoria/edit-categoria/edit-categoria.component';
import { ViewTransaccionComponent } from './pages/user/transaccion/view-transaccion/view-transaccion.component';
import { AddTransaccionComponent } from './pages/user/transaccion/add-transaccion/add-transaccion.component';
import { VistaTransaccionComponent } from './pages/user/transaccion/vista-transaccion/vista-transaccion.component';
import { EditTransaciconComponent } from './pages/user/transaccion/edit-transacicon/edit-transacicon.component';
import { PlanComponent } from './pages/user/plan-ahorro/plan/plan.component';
import { HistoricoComponent } from './pages/user/plan-ahorro/historico/historico.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LogComponent } from './pages/user/logs/log/log.component';
import { ViewGastosComponent } from './pages/user/gastos/view-gastos/view-gastos.component';
import { AddGastoComponent } from './pages/user/gastos/add-gasto/add-gasto.component';
import { EditGastoComponent } from './pages/user/gastos/edit-gasto/edit-gasto.component';
import { LogAdminComponent } from './pages/admin/log-admin/log-admin.component';
import { UsuariosVistaComponent } from './pages/admin/usuarios-vista/usuarios-vista.component';
import { BackupComponent } from './pages/admin/backup/backup.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    pathMatch : 'full'
  },{
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },{
    path: 'admin',
    component: DashboardComponent,
    canActivate:[AdminGuard],
    children:[{
      path: 'profile',
      component: ProfileComponent
    },{
      path: '',
      component : WelcomeComponent
    },{
      path: 'categorias',
      component : ViewCategoriasComponent
    },{
      path: 'add-categoria',
      component : AddCategoriaComponent
    },{
      path: 'log',
      component: LogAdminComponent
    },{
      path: 'usuarios',
      component: UsuariosVistaComponent
    },{
      path: 'backup',
      component: BackupComponent
    }
  ]
  },{
    path: 'user',
    component: UserDashboardComponent,
    canActivate:[NormalGuard],
    children: [{
      path: 'inicio',
      component : InicioUserComponent
    },
    {
      path: 'cuenta',
      component : ViewCuentaComponent
    },{
      path: 'cuenta-add',
      component : AgregarCuentaComponent
    },{
      path: 'cuenta-edit/:id',
      component : EditarCuentaComponent
    },{
      path: 'cuenta-view/:id',
      component : ViewCuentaTransaccionComponent
    },{
      path: 'categoria',
      component : ViewUserCategoriaComponent
    },{
      path: 'categoria-add',
      component : AddUserCategoriaComponent
    },{
      path: 'categoria-edit/:id',
      component : EditCategoriaComponent
    },{
      path: 'transaccion',
      component: ViewTransaccionComponent
    },{
      path: 'transaccion-add',
      component: AddTransaccionComponent
    },{
      path: 'transaccion-view',
      component: VistaTransaccionComponent
    },{
      path: 'transaccion-edit/:id',
      component: EditTransaciconComponent
    },{
      path: 'plan-ahorro',
      component: PlanComponent
    },{
      path: 'plan-ahorro-historico',
      component: HistoricoComponent
    },{
      path: 'log',
      component: LogComponent
    }
    ,{
      path: 'profile',
      component: ProfileComponent
    },{
      path: 'pagos',
      component: ViewGastosComponent
    },{
      path: 'add-pagos',
      component: AddGastoComponent
    },{
      path: 'edit-pagos/:id',
      component: EditGastoComponent
    },{
      path: '**', 
      pathMatch: "full",
      component: NotFoundComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
