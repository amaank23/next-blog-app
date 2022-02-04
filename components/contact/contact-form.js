import React, { useContext, useState } from 'react';
import { Context } from '../../store/notification-context';
import classes from './contact-form.module.css'

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const notificationCtx = useContext(Context)

    async function formHandler(e){
        e.preventDefault();
        notificationCtx.showNotification({ title: 'Pending', message: 'wait....', status: 'pending' })
        let res;
        const formData = { 
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        }
        try { 
            res = await fetch('/api/contact', {
                body: JSON.stringify(formData),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!res.ok){
                res = await res.json();
                throw new Error(res.message);
            }
            res = await res.json()
            notificationCtx.showNotification({ title: 'Message Send Successfully', message: res.message, status: 'success' })
            setEnteredName('')
            setEnteredEmail('')
            setEnteredMessage('')
        } catch (error) {
            notificationCtx.showNotification({ title: 'Something went wrong', message: error.message, status: 'error' })
        }
        
    }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={formHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
    );
};

export default ContactForm;
