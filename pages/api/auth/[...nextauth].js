import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
    Providers.Google({
        clientId: process.env.NEXTAUTH_GOOGLE_ID,
        clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET
    }),
    Providers.Facebook({
        clientId: process.env.NEXTAUTH_FACEBOOK_ID,
        clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET
    })
]

const pages = {
    signIn: '/signin',
}

const callbacks = {}

callbacks.signIn = async function signIn(user, account, profile) {
    if (account.provider === 'google' && profile.verified_email) { 

        const googleUser = {
            id: profile.id,
            email: profile.email,
            login: profile.login,
            name: profile.name,
            firstName: profile.given_name,
            lastName: profile.family_name,
            image: profile.picture
        }
    
        // user.accessToken = await getTokenFromYourAPIServer('google', googleUser)
        return true;
    }
    else if(account.provider === 'facebook') {
        return true;
    }

    return false;
}

// callbacks.jwt = async function jwt(token, user) {
//     if (user) {
//         token = { accessToken: user.accessToken }
//     }

//     return token
// }

// callbacks.session = async function session(session, token) {
//     session.accessToken = token.accessToken
//     return session
// }

const options = {
  providers,
  callbacks,
  pages
}

export default (req, res) => NextAuth(req, res, options)