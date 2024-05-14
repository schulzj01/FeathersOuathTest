// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'

import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'

class NOAAOnlineStrategy extends OAuthStrategy {
  async getEntityData(OAuthProfile, any, Params) {
    const baseData = await super.getEntityData(profile, existing, params)
		console.log(baseData)
		console.log(baseData)
		console.log(baseData)
		console.log(baseData)
		throw new Error(baseData)
		console.log(profile)
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

	console.warn(new NOAAOnlineStrategy());
  authentication.register('jwt', new JWTStrategy())
  authentication.register('google', new OAuthStrategy())
  authentication.register('github', new OAuthStrategy())
  authentication.register('noaaonline', new NOAAOnlineStrategy())


  app.use('authentication', authentication)
  app.configure(oauth())
}
