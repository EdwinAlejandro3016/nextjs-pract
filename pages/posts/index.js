import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link';
const index = ({posts}) => {
  return (
      <Layout>
          <h1>Posts</h1>
          {posts.map(({id,title,body})=>(
              <Link href={`posts/detail/${id}`} key={id}>
                    <div>
                        <h1>{id} {title}</h1>
                        <p>{body}</p>
                    </div>
              </Link>
          ))}
      </Layout>
  )
}

export default index;

export async function getStaticProps(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        return {
            props: {
                posts: data
            }
        }
    }catch(e){
        console.log(e);
    }
}