import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {FormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuthentication from './reducers';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(fromAuthentication.authenticationFeatureKey,
      { authReducers: fromAuthentication.authReducers})
  ],
  exports: [AuthComponent]
})
export class AuthenticationModuleModule { }
