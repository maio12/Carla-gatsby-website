import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <div> 
        <Layout>
        <Head title="Home"/>
        <h1>Hello</h1>
        <h2>I'm Carla, living in Madrid</h2>
        <p>Need to go outside the site? <a href='https://facebook.com' target='_/blank'>Facebook</a></p>
        <p>Need a therapist? <Link to='/contact'>Contact me</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage;