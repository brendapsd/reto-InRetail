import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNewClientComponent } from './components/form-new-client/form-new-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { ProjClientComponent } from './components/proj-client/proj-client.component';


const routes: Routes = [
  { path: '', component: FormNewClientComponent },
  { path: 'listaClientes', component: ListClientComponent },
  { path: 'proyeccionClientes', component: ProjClientComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
