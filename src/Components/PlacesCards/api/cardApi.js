import {callApi} from '../../../config/callApi';
const CardApi= async()=>{
    try{
    let method="GET";
    let queryResult = await callApi('/becomeAProvider/find',method,null);
    return queryResult.data
    }   
    catch(e){
     console.log(e);
    }
}
export default CardApi;