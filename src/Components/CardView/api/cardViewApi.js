import {callApi} from '../../../config/callApi';
const CardViewApi= async(values)=>{
    try{
        const placeId = values.placeId;
   console.log('values = ',values)
    let method="POST";
    let queryResult = await callApi('/bookedPlace/'+placeId,method, values);
    console.log('carviewApi ', queryResult.data)
    return queryResult.data
    }   
    catch(e){
     console.log(e);
    }
}
export default CardViewApi;