import { Directive, ElementRef, Input } from '@angular/core';
import { PermissionService } from '../shared/permission.service';

@Directive({
    selector: '[hasPermission]',
})
export class HasPermissionDirective {

    @Input('hasPermission') permission: string;

    constructor(element: ElementRef, permissionService: PermissionService) {
        if (!permissionService.userHasPermission(this.permission)){
            element.nativeElement.style.display = 'none';
        }
    }
}