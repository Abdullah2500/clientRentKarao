import {callApi} from '../../../config/callApi';
const CardApiTwo= async()=>{
    try{
        
    let method="GET";
    let queryResult = await callApi('/becomeAProvider/60d7c87f01ce712e9879bb4f',method,null);
    return queryResult.data
    }   
    catch(e){
     console.log(e);
    }
}
export default CardApiTwo;