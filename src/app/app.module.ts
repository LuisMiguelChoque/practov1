import { Inject, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { MenuComponent } from './menu/menu.component';
import { FormspersonalComponent } from './formspersonal/formspersonal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    TransaccionesComponent,
    MenuComponent,
    FormspersonalComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch() 
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
