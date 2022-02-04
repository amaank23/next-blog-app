import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData, getPostsSlug } from "../../helpers/post-utils";
import Head from 'next/head'

function PostDetailPage({ post }){
    return (
        <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <PostContent post={post} />
        </>
    )
}



export function getStaticProps(context){
    const { params } = context;
    const postData = getPostData(params.slug)
    return {
        props: {
            post: postData
        }
    }
}


export function getStaticPaths(){
    const allPostsSlug = getPostsSlug();
    return {
        paths: allPostsSlug.map(post => ({ params: { slug: post } })),
        fallback: false
    }
}

export default PostDetailPage