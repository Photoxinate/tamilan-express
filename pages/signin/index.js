import React from 'react'
import { signIn, getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import classes from './index.module.scss'

const index = () => {

  const { t } = useTranslation('sign-in')

  const router = useRouter()

  console.log('[signin] rendered')

  const callbackUrl = router.query.callbackUrl ? router.query.callbackUrl : process.env.NEXTAUTH_URL
    
  return (
    <section className={classes.signin}>
      <div className={classes.container}>
        <h1>Sign In | Sign Up</h1>
        <p>with your social network</p>
        <div className={classes.buttons}>
          <button className={classes.google} onClick={() => signIn('google', { callbackUrl })}> 
            <img src='/logo/google_logo.svg' width='24' height='23' />
            Continue with Google
          </button>
          <button className={classes.facebook} onClick={() => signIn('facebook', { callbackUrl })}>
            <img src='/logo/facebook_logo.png' width='24' height='24' />
            Continue with Facebook
          </button>
        </div>
        <span className={classes.agree}>
        {t('signin-agree')} <Link href='terms-conditions'><a>{t('signin-terms')}</a></Link>{t('signin-posttext')}
        </span>
      </div>
    </section>
  );

}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const locale = ctx.req.cookies.NEXT_LOCALE

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      },
    }
  }
  
  else if(locale !== ctx.locale) {
    return {
      props: {},
      redirect: {
        destination: locale + '/signin?' + new URLSearchParams(ctx.query),
        permanent: false
      }
    }
  }

  return {
    props: {}
  }

}

export default index;