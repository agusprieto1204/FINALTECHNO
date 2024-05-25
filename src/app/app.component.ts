import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadClientes } from './store/actions/cliente.actions';
import { Cliente } from './models/cliente.models';
import { State } from './store/reducers/cliente.reducer';
import { selectAllClientes, selectClienteError } from './store/selectors/cliente.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formulario: FormGroup;
  clientes$: Observable<Cliente[]>;
  error$: Observable<any>;
  searchText: string = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      mail: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^[0-9]*$/)]
    });

    this.store.dispatch(loadClientes());

    this.clientes$ = this.store.select(selectAllClientes);
    this.error$ = this.store.select(selectClienteError);
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
