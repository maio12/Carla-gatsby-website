import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: published,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          published (formatString: "MMMM Do YYYY")
        }
      }
    }
  }
  `) 
  
  return (
    <div>
    <Layout>
    <Head title="Blog"/>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map(i =>
        <li className={blogStyles.post} key={i.node.title}>
        <Link to={`/blog/${i.node.slug}`}> 
          <h2>{i.node.title}</h2>
          <p>{i.node.published}</p>
        </Link>
        </li>
        )}
      </ol>
    </Layout>
    </div>
  )
}

export default BlogPage;