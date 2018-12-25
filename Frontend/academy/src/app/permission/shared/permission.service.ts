import { Injectable } from '@angular/core';

@Injectable()
export class PermissionService {

    userHasPermission(permisison: string): boolean {
        //TODO: load and cache permissions on page load 
        return false;
    }
}
