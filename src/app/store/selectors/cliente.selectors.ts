import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/cliente.reducer';

export const selectClienteState = createFeatureSelector<State>('clientes');

export const selectAllClientes = createSelector(
  selectClienteState,
  (state: State) => state.clientes
);

export const selectClienteError = createSelector(
  selectClienteState,
  (state: State) => state.error
);
