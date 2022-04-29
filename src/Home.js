import React,{useState,useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import sanityClient from'./client';
import {PortableText} from '@portabletext/react'

import Details from './details'
const BlockContent = require('@sanity/block-content-to-react')


function Home() {
    const [posts,setPosts] = useState([])

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
        .then((data)=>setPosts(data))
        .catch(console.error)
    },[]);


  return (
    <>{posts && posts.map((post,index)=>(
    <div key={post.slug.current} className="flex flex-row">
      {/* <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-56 h-56 object-cover" />
      <h3>{post.title}</h3> */}
   
    
   

        <div class="container mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={post.mainImage.asset.url} alt={post.mainImage.alt} />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">{post.author}</h1>
                  <p class="leading-relaxed mb-3">{post.title}</p>
                  <p class="leading-relaxed mb-3">{post.description}</p>
                  <PortableText value={post.body} projectId="gmx4s8ly"
   dataset="production"/>
    <BlockContent blocks={post.body} projectId="gmx4s8ly"
   dataset="production"/>
   <Link to={"/post/"+ post.slug.current} key={post.slug.current}>read
   
   </Link>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg flex justify-center">Learn more</button>
                   
                  </div>
                </div>
              </div>
            </div>
           </div>
             
          </div>
        </div>
     

    
    
    ))}
  </>
  )
    }

export default Home