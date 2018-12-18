import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission/has-permission.directive';
import { PermissionService } from './shared/permission.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HasPermissionDirective
  ],
  providers: [
    PermissionService
  ],
  exports: [HasPermissionDirective]
})
export class PermissionModule { }
