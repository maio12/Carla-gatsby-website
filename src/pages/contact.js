import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';


const ContactPage = () => {
  return (
    <div>
    <Layout>
    <Head title="Contact"/>
      <h1>Carla contacts</h1>
      <Link to='/about'>About me</Link>
      <p>carla@maio.es</p>
      </Layout>
    </div>
  )
}

export default ContactPage;