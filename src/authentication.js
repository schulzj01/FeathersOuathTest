// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'

import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'

//This is the repsponse handler.  You'll want to put in any custom code here to handle the SSO response
class NOAAOnlineStrategy extends OAuthStrategy {
  async getEntityData(OAuthProfile, any, Params) {
    const baseData = await super.getEntityData(profile, existing, params)
    return {
      ...baseData,
      // The GitHub profile image
      avatar: profile.avatar_url,
      // The user email address (if available)
      email: profile.email
    }
  }
}

export const authentication = (app) => {
  const authentication = new AuthenticationService(app)
  authentication.register('jwt', new JWTStrategy())
  authentication.register('noaaonline', new NOAAOnlineStrategy())

  app.use('authentication', authentication)
  app.configure(oauth())
}
