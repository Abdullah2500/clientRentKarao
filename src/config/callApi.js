import axios from 'axios'
import config from './constants'


export const callApi = (address, method, headers, data, type) => {
    console.log("here is data type", data);
   console.log("here type is",type)

    let content_type = '';
    if (type === "form") {
        content_type = 'multipart/form-data';
        console.log("here it is form data")
    } else {
        content_type = 'application/json'
    }

    let token = localStorage.getItem('accessToken');
    console.log("token here",token)
    if (method === 'GET') {
        return axios.get(config.baseUrl + address, {
            headers: {
                'authorization': 'Bearer ' +  token,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
        });
    } else if (method === 'POST') {
        // console.log('passedData', ...data);
        return axios.post(config.baseUrl + address + "/", data, {
            
            headers: {
                'authorization': 'Bearer '+ token,
                'Content-Type': content_type,
                "Access-Control-Allow-Origin": "*",
            }
            
        });
    } else if (method === 'PUT') {
        return axios.put(config.baseUrl + address + "/", data, {
            headers: {
                'authorization': 'Bearer ' + token,
                'Content-Type': content_type,
                "Access-Control-Allow-Origin": "*"

            }
        });
    } else {
        return axios.delete(config.baseUrl + address, headers, data);
    }
}