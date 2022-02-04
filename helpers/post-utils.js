// import fs from 'fs'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'


const postDirectory = path.join(process.cwd(), 'posts')

export function getPostData(fileName){
    
    const postSlug = fileName.replace(/\.md$/, ''); // removes file extension
    const filePath = path.join(postDirectory, `${postSlug}.md`)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)


    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData;
}

export function getAllPosts(){
    const postFiles = readdirSync(postDirectory);

    const allPost = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPostArray = allPost.sort((a, b) => a.date > b.date ? -1 : 1);

    return sortedPostArray;
}

export function getPostsSlug(){
    const postFiles = readdirSync(postDirectory);
    const newPostFiles = postFiles.map(file => file.replace(/\.md$/, ''))
    return newPostFiles;
}

export function getFeaturedPost(){
    const allPost = getAllPosts();

    const featuredPost = allPost.filter(post => post.isFeatured);
    return featuredPost;
}