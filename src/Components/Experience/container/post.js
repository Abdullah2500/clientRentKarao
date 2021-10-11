import React, { useState,useEffect } from 'react';
import PostApi from '../api/postApi';
import AppExperience from '../ui/experiece';
const Post=(props) => {
    const [post,setpost] = useState();
   
    useEffect(() => {
        PostApi().then((result)=>{
            console.log('result from db= ',result)
            if(result){
                setpost(result)
            }
            else{
                alert("some server error")
            }
        })
      },[]);
    return<AppExperience post={post}/>
}
export default Post;