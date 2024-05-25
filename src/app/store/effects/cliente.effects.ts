import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import * as ClienteActions from '../actions/cliente.actions';

@Injectable()
export class ClienteEffects {

  loadClientes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteActions.loadClientes),
      mergeMap(() => this.apiService.getClientes()
        .pipe(
          map(clientes => ClienteActions.loadClientesSuccess({ clientes })),
          catchError(error => of(ClienteActions.loadClientesFailure({ error })))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
