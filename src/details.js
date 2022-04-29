import React,{useState,useEffect} from 'react'
import sanityClient from'./client';
import {PortableText} from '@portabletext/react'
const BlockContent = require('@sanity/block-content-to-react')

function Details(){
    const [fullpost,setFullpost]=useState([])

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "post"]{
          title,
          slug,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
          ,description
        }`)
        .then((data)=>setFullpost(data))
        .catch(console.error)
    },[]);

    return (
        <>{fullpost && fullpost.map((posting,key)=>(
            <div  key={posting.slug.current}>
            <PortableText value={posting.body} key={key}/>
            </div>

        ))
        
}</>
    )
}

export default Details