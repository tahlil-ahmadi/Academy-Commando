import { Injectable } from "@angular/core";
import { UserManager, User } from 'oidc-client'
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    private userManager : UserManager;
    private currentUser : User;

    constructor(private router: Router) {
        this.userManager = new UserManager(this.getSettings());
    }

    private getSettings() {
        return {
            authority: 'http://localhost:5000/',
            client_id: 'academy',
            redirect_uri: 'http://localhost:4200/auth-callback',
            response_type: "id_token token",
            scope: "openid profile academy-api",
            filterProtocolClaims: true,
            loadUserInfo: true,
        };
    }

    isUserLoggedIn() : boolean{
        return this.currentUser != null;
    }

    redirectToSts(currentUrl: string) {
        this.userManager.signinRedirect({state:currentUrl});
    }

    redirectCallback() {
        // TODO: prevent open-redirection
        this.userManager.signinRedirectCallback().then(tokenResponse =>{
            this.currentUser = tokenResponse;
            this.router.navigate([tokenResponse.state]);
        });
    }

    getAccessToken() :string {
        return `${this.currentUser.token_type} ${this.currentUser.access_token}`;
    }
}