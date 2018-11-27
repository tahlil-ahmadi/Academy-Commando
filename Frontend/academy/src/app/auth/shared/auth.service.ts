import { Injectable } from "@angular/core";
import { UserManager, User } from 'oidc-client'

@Injectable()
export class AuthService {

    private userManager : UserManager;
    private currentUser : User;

;    constructor() {
        var config = {
            authority: 'http://localhost:5000/',
            client_id: 'academy',
            redirect_uri: 'http://localhost:4200/auth-callback',
            response_type: "id_token token",
            scope: "openid profile",
            filterProtocolClaims: true,
            loadUserInfo: true,
        };
        this.userManager = new UserManager(config);
    }

    isUserLoggedIn() : boolean{
        return this.currentUser != null;
    }

    redirectToSts() {
        this.userManager.signinRedirect();
    }

    redirectCallback() {
        this.userManager.signinRedirectCallback().then(tokenResponse =>{
            this.currentUser = tokenResponse;
            debugger;
        });
    }
}