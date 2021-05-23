import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import classes from './index.module.scss'


const index = () => {
    return (
        <section className={classes.container}>
            <Head>
                <title>Tamilan Express - Privacy Policy</title>
                <meta name='description' content='Privacy policy of Tamilan Express' />
            </Head>
            <div className={classes.wrap}>
                <h1>Privacy Policy</h1>
                <p>
                    The Tamilan Express Private Limited and each of their respective subsidiary, parent and affiliated companies is deemed to operate this Website (“we” or “us”) recognizes that you care how information about you is used and shared. We have created this Privacy Policy to inform you what information we collect on the Website, how we use your information and the choices you have about the way your information is collected and used.  Please read this Privacy Policy carefully.  Your use of the Website indicates that you have read and accepted our privacy practices, as outlined in this Privacy Policy.<br/><br/>

                    Please be advised that the practices described in this Privacy Policy apply to information gathered by us or our subsidiaries, affiliates or agents: (i) through this Website, (ii) where applicable, through our Customer Service Department in connection with this Website, (iii) through information provided to us in our free standing retail stores, and (iv) through information provided to us in conjunction with marketing promotions and sweepstakes.<br/><br/>

                    We are not responsible for the content or privacy practices on any websites<br/><br/>

                    We reserve the right, in our sole discretion, to modify, update, add to, discontinue, remove or otherwise change any portion of this Privacy Policy, in whole or in part, at any time. <br/><br/>

                    If you provide information to us or access or use the Website in any way after this Privacy Policy has been changed, you will be deemed to have unconditionally consented and agreed to such changes.  The most current version of this Privacy Policy will be available on the Website and will supersede all previous versions of this Privacy Policy.<br/><br/>

                    If you have any questions regarding this Privacy Policy, you should contact our Customer Service Department by email at info@tamilanexpress.ca
                </p>
                <h2>To deactivate your account or delete your personal data:</h2>
                <ol>
                    <li>Click the profile icon in the top right of website or visit <Link href='/account'><a>here.</a></Link></li>
                    <li>Select profile info or directly visit <Link href='/profile#settings'><a>here.</a></Link></li>
                    <li>Click Deactivate Account.</li>
                    <li>Choose Deactivate Account, to confirm account deactivation.</li>
                </ol>
            </div>
            
        </section>
    );
};

export default index;