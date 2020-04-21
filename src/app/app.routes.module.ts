import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductModificationComponent } from './product-modification/product-modification.component';
import { AuthGuard } from './helper/auth.guard';
import { ModGuard } from './helper/mod.guard';
import { CustomChartComponent  } from './custom-chart/custom-chart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent,canActivate: [AuthGuard]},
  {path:'edit', component:ProductModificationComponent, canActivate: [AuthGuard], canLoad:[ModGuard]},
  {path: 'customChart', component:CustomChartComponent,canActivate: [AuthGuard]},
  { path: 'productDetails',canActivate: [AuthGuard],canLoad:[ModGuard], loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})

export class AppRoutingModule { }