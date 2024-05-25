import { createAction, props } from '@ngrx/store';
import { Cliente } from '../../models/cliente.models';

export const loadClientes = createAction('[Cliente] Load Clientes');
export const loadClientesSuccess = createAction(
  '[Cliente] Load Clientes Success',
  props<{ clientes: Cliente[] }>()
);
export const loadClientesFailure = createAction(
  '[Cliente] Load Clientes Failure',
  props<{ error: any }>()
);
