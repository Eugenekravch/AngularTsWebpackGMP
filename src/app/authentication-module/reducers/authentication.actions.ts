import {createAction} from '@ngrx/store';

export const login = createAction('[Auth] Login', (token: string) => ({token}));
export const logout = createAction('[Auth] Logout');
