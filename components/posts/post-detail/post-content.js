import PostHeader from "./post-header"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula'
import Image from 'next/image'
import ReactMarkdown  from "react-markdown"
import classes from './post-content.module.css'

function PostContent({ post }){
    const customRenderer = {
        p(paragraph){
            const { node } = paragraph;
            if(node.children[0].tagName === 'img'){
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image 
                        src={`/images/posts/${post.slug}/${image.properties.src}`}
                        alt={image.alt}
                        width={600}
                        height={300} />
                    </div>
                )
            }
            return (
                <p>{paragraph.children}</p>
            )
        },
        code(code){
            const { className, children } = code;
            const language = className.split('-')[1];
            return (
                <SyntaxHighlighter style={dracula} language={language}>
                    {children}
                </SyntaxHighlighter>
            )
        }
    }
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} slug={post.slug} img={post.image} />
            <ReactMarkdown  components={customRenderer}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent