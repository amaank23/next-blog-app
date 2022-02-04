import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../helpers/post-utils';
import Head from 'next/head'

function Posts({ posts }){
    const DUMMY_POSTS = [
        {
          title: 'Getting Started with NextJs',
          image: 'getting-started-nextjs.png',
          slug: 'getting-started-with-nextjs1',
          excerpt: 'Next Js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships wit buit-in SSR.',
          date: '2022-02-10'
        },
        {
          title: 'Getting Started with NextJs',
          image: 'getting-started-nextjs.png',
          slug: 'getting-started-with-nextjs2',
          excerpt: 'Next Js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships wit buit-in SSR.',
          date: '2022-02-10'
        },
        {
          title: 'Getting Started with NextJs',
          image: 'getting-started-nextjs.png',
          slug: 'getting-started-with-nextjs3',
          excerpt: 'Next Js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships wit buit-in SSR.',
          date: '2022-02-10'
        },
        {
          title: 'Getting Started with NextJs',
          image: 'getting-started-nextjs.png',
          slug: 'getting-started-with-nextjs4',
          excerpt: 'Next Js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships wit buit-in SSR.',
          date: '2022-02-10'
        },
      ]
    return (
      <>
      <Head>
      <title>Posts</title>
      </Head>
      <AllPosts posts={posts} /></>
    )
}

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default Posts;