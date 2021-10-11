import {callApi} from '../../../config/callApi';

const SignupApi = async(data) =>{
    try{

        console.log('Signup Api ');
        let method = 'POST';
        let queryResult = await callApi('/users/signup', method, null, data);
        return queryResult.data;
    }
    catch(e){
       console.log(e);
    }
}
export default SignupApi;