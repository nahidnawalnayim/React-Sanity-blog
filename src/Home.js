import React,{useState,useEffect} from 'react'
import sanityClient from'./client'
function Home() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`)
        .then((data)=>setPosts(data))
        .catch(console.error)
    },[]);


  return (
    <>{posts && posts.map((post,index)=>(
    <div key={post.slug.current}>
      <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-56 h-56 object-cover" />
      <h3>{post.title}</h3>
    </div>))}
  </>
  )
    }

export default Home