import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

const AUTH_ROUTES : Routes = [
  { 
      path: 'auth-callback', 
      component: AuthCallbackComponent,
  },
];

@NgModule({
  declarations: [
    AuthCallbackComponent
  ],
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  entryComponents:[
  ],
  exports:[],
  bootstrap: []
})
export class AuthModule { }
