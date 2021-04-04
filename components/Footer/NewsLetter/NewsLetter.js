import axios from 'axios'
import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import { social } from '../../../config/config'
import { ArrowRight, Spinner } from '../../Icons/Icons'

import classes from './NewsLetter.module.scss'

const NewsletterInput = ({ onChange, value, loading }) => (
    <Input 
        type='email' 
        required pattern={"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"} 
        title={'Please enter a valid email address.'} 
        onChange={onChange} 
        value={value}
        fluid 
        placeholder='Enter your email..' 
        aria-label='email for newsletter' 
        action={
            <Button animated aria-label='Send' primary disabled={loading}>
                <Button.Content visible>
                    {loading ? <Spinner color='white' size={18} /> : <ArrowRight color='white' size={16} strokeWidth={3} />}
                </Button.Content>
                <Button.Content hidden>
                    <ArrowRight color='white' size={16} strokeWidth={3} />
                </Button.Content>
            </Button>
        } 
    />
)


const NewsLetter = () => {

    const [loading, setLoading] = useState(false)

    const { control, handleSubmit, reset } = useForm()

    const { t } = useTranslation('common')

    const { addToast } = useToasts()

    const formSubmitHandler = async data => {
        setLoading(true)
        axios.post('http://localhost:3001/newsletters', data)
            .then(res => {
                reset()
                addToast('You are successfully registered for the newsletters!', { appearance: 'success' })
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                addToast(err.response.data.message, { appearance: 'error' })
            });
    }

    return (
        <div className={classes.containerWrap}>
            <div className={classes.container}>

            <div className={classes.news}>
                <div className={classes.text}>
                    <h2>
                    {t('NewsLetter')} 
                    </h2>
                    <p>
                        Be the first to know. Sign up for the newsletter today.
                    </p>
                </div>
                <form className={classes.form} onSubmit={handleSubmit(formSubmitHandler)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ onChange, value }) => <NewsletterInput onChange={onChange} value={value} loading={loading} />}
                    />
                </form>
            </div>
            <div className={classes.social}>
                <a href={social.facebook} aria-label='Like us on Facebook' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href={social.instagram} aria-label='Follow us on Instagram' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={social.twitter} aria-label='Follow us on Twitter' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
            </div>

            </div>

        </div>
        
    );
};

export default NewsLetter;