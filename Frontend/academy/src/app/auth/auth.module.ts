import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth-interceptor';

const AUTH_ROUTES : Routes = [
  { 
      path: 'auth-callback', 
      component: AuthCallbackComponent,
  },
];

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
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
    AuthGuard,
    httpInterceptorProviders
  ],
  entryComponents:[
  ],
  exports:[],
  bootstrap: []
})
export class AuthModule { }
