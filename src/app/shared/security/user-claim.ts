export class UserClaim {
  claimId = '';
  userId = '';
  claimType = '';
  claimValue = '';
}

export interface ClaimRequest {
  type: string;
  value: string;
}
