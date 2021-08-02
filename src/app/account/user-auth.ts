export class UserAuth {
  userName = '';
  bearerToken = '';
  isAuthenticated = false;

  init(): void {
    this.userName = '';
    this.bearerToken = '';
    this.isAuthenticated = false;
  }
}
