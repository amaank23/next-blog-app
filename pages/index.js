import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPost } from '../helpers/post-utils';
import Head from 'next/head'

const HomePage = ({ posts }) => {
  return (<>
    <Head>
      <title>Aman's Next Blog</title>
    </Head>
    <Hero />
    <FeaturedPosts posts={posts} />
  </>);
};

export function getStaticProps(){
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
