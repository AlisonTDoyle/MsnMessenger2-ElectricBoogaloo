import { Injectable } from '@angular/core';
import { signUp } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})

export class CognitoService {

  constructor() {
  }

  async handleSignUp(username: string, password: string, email: string) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp(
        {
          username,
          password,
          options: {
            userAttributes: {
              email
            },
            // optional
            autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          }
        });

      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

}
