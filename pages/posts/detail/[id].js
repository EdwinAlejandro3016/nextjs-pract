export default function postDetail({post}){
    return (
        <div>
            <h1>Post Detail {post.id}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        const paths = data.map(({id})=>(
            {params: {id: `${id}`}}
        ));
        return {
            paths,
            fallback: false
        }
    }catch(e){
        console.log(e);
    }
}

export async function getStaticProps({params}){
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
        const data = await res.json();
        return {
            props: {
                post: data
            }
        }
    }catch(e){
        console.log(e)
    }
}

