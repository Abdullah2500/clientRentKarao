import {callApi} from '../../../config/callApi';

const loginApi = async(data) =>{
    try{
        console.log("login api");
        let method = 'POST';
        let queryResult = await callApi('/users/login', method, null, data);
        console.log('Query Result = ',queryResult.data);
        return queryResult.data; 
    }
    catch(e){
        console.log(e);
    }
}
export default loginApi;
