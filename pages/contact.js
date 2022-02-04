import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head'

const Contact = () => {
  return (
      <>
        <Head>
            <title>Contact</title>
        </Head>
        <ContactForm />
      </>
  );
};

export default Contact;
