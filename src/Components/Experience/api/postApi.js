import {callApi} from '../../../config/callApi';
const PostApi= async()=>{
    try{   
    let method="GET";
    let queryResult = await callApi('/becomeAProvider',method,null);///60d62f487e0d12039098097c
    console.log('queryresult.data in postApi =',queryResult.data)
    return queryResult.data
    }
    catch(e){
     console.log(e);
    }
}
export default PostApi;