import {UserClaim} from "./user-claim";

export class UserAuth {
  userName = '';
  bearerToken = '';
  isAuthenticated = false;
  claims: UserClaim[] = [];

  init(): void {
    this.userName = '';
    this.bearerToken = '';
    this.isAuthenticated = false;
    this.claims = [];
  }


}
