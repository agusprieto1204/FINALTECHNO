import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { LoginComponent } from './login/login.component';
import { ClientesService } from './services/cliente.service';
import { ApiService } from './services/api.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { clienteReducer } from './store/reducers/cliente.reducer'; 
import { ClienteEffects } from './store/effects/cliente.effects'; 

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('clientes', clienteReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ClienteEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }) 
  ],
  providers: [ClientesService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
