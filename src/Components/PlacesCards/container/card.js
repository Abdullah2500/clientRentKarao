import React, { useState,useEffect } from 'react';
import CardApi from '../api/cardApi';
import AppCards from '../ui/Cards';
const Post=(props) => {
    const [post,setpost] = useState();
    useEffect(() => {
        CardApi().then((result)=>{
            console.log('result from db= ',result)
            if(result){
                setpost(result)
            }
            else{
                alert("some server error")
            }
        })
      },[]);
    return<AppCards post={post}/>
}
export default Post;