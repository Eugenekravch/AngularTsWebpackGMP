import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { login, logout } from './authentication.actions';


export const authenticationFeatureKey = 'authentication';

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
}

export const InitialAuthState: AuthState = {
  isAuthenticated: false,
  token: ''
};

const authReducer = createReducer(InitialAuthState,
  on(login, ( state, {token}) => {
    return {...state, isAuthenticated: true, token};
  }),
  on(logout, state => ({ ...state, isAuthenticated: false, token: ''}))
);

export function authReducers(state: AuthState, action: Action) {
  return authReducer(state, action);
}

// export const reducers: ActionReducerMap<AuthState> = {
//
// };
//
//
// export const metaReducers: MetaReducer<AuthState>[] = [];
