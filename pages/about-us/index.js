import React from 'react'
import RunningLogo from '../../components/RunningLogo/RunningLogo'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider'
import { contact } from '../../config/config'
import { Clock, Location, Mail, Phone } from '../../components/Icons/Icons'
import useTranslation from 'next-translate/useTranslation'

import classes from './index.module.scss'

const index = () => {

    const { t } = useTranslation('about-us')

    return (
        <div className={classes.index}>
            <div className={classes.banner}>
                <img src='/images/team.jpg' alt='Members of Tamilan Express' height={500} width={900} />
            </div>
            <section className={classes.about}>
                <span className={classes.span}>We Make your shopping easy!</span>
                <h1>WHO ARE WE?</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                </p>
                <RunningLogo />
            </section>
            <section className={classes.contact} id='contact'>
                <h1> {t('contact_us')} </h1>
                <div className={classes.details}>
                    <div className={classes.item}>
                        <label className={classes.title}><Phone color='#888' /> Phone</label>
                        <div className={classes.value}>
                            <a href={'tel:' + contact.phone}>{contact.phone}</a>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Mail color='#888' /> E-mail</label>
                        <div className={classes.value}>
                            <a href={'mailto:' + contact.email}>{contact.email}</a>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Location color='#888' /> Address</label>
                        <div className={classes.value}>{contact.address}</div>
                    </div>
                    <div className={classes.item}>
                        <label className={classes.title}><Clock color='#888' /> Store Hours</label>
                        <div className={[classes.value, classes.hours].join(' ')}>
                            <div> {contact.openHours.weekdays} </div>
                            <div> {contact.openHours.weekend} </div>
                        </div>
                    </div>
                </div>
                <Divider horizontal>Or</Divider>
                <div className={classes.form}>

                </div>
            </section>
        </div>
    );
};

export default index;