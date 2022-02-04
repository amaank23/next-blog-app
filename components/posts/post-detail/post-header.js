import Image from 'next/image'
import classes from './post-header.module.css'

function PostHeader({ title, img, slug }){
    const imgPath = `/images/posts/${slug}/${img}`
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={imgPath} width='200' height='150' />
        </header>
    )
}

export default PostHeader