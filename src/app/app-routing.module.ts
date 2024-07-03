import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { FormspersonalComponent } from './formspersonal/formspersonal.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'forms',component:FormsComponent //creando ruta para llamar al componente FormsComponent
  },
  {
    path:'formspersonal',component:FormspersonalComponent //creando ruta para llamar al componente FormsComponent
  },
  {
    path:'producto',component:ProductosComponent //creando ruta para llamar al componente Producto
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
