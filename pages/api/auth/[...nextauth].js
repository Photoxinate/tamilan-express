import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from '../../../axios'

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
            login: {
                provider: 'google',
                providerId: profile.id,
            },
            email: profile.email,
            firstName: profile.given_name,
            lastName: profile.family_name,
        }
    
        try {
            const res = await axios.post('auth/user', googleUser)
            user.accessToken = res.data.access_token
            return true;
        }
        catch (err) {
            return false;
        }
    }
    else if(account.provider === 'facebook') {
        const name = profile.name.split(' ')
        const facebookUser = {
            login: {
                provider: 'facebook',
                providerId: profile.id,
            },
            email: profile.email,
            firstName: name[0],
            lastName: name.length > 1 ? name[name.length - 1] : ''
        }

        try {
            const res = await axios.post('auth/user', facebookUser)
            user.accessToken = res.data.access_token
            return true;
        }
        catch (err) {
            return false;
        }
    }

    return false;
}

callbacks.jwt = async function jwt(token, user) {
    if (user) {
        token.accessToken = user.accessToken
    }

    return token
}

callbacks.session = async function session(session, token) {
    session.accessToken = token.accessToken

    try {
        const config = { headers: { Authorization: `Bearer ${token.accessToken}` } }
        const res = await axios.get('auth/profile', config)
    
        session.user = res.data
    }
    catch(err) {
        console.log({err});
    }
    
    return session
}

const options = {
  providers,
  callbacks,
  pages
}

export default (req, res) => NextAuth(req, res, options)