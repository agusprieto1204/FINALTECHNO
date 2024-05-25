import { createReducer, on } from '@ngrx/store';
import { loadClientes, loadClientesSuccess, loadClientesFailure } from '../actions/cliente.actions';
import { Cliente } from '../../models/cliente.models';

export interface State {
  clientes: Cliente[];
  error: any;
}

export const initialState: State = {
  clientes: [],
  error: null
};

export const clienteReducer = createReducer(
  initialState,
  on(loadClientes, state => ({ ...state })),
  on(loadClientesSuccess, (state, { clientes }) => ({ ...state, clientes })),
  on(loadClientesFailure, (state, { error }) => ({ ...state, error }))
);
