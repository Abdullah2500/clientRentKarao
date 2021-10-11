import React from 'react';
import { callApi } from '../../../config/callApi';
const SearchApi = async(data) => {
    try {
      const city=data.city;
      const placeType=data.placeType;
      const fee = data.fee;
        let method = 'GET';

        let queryResult = await callApi("/becomeAProvider/search/"+ city +"/"+ placeType + "/" + fee, method, null);
        console.log('querResult.data in SearchApi= ',queryResult.data);
        return queryResult.data;
        
      } catch (e) {
        console.log(e);
      }
}
 
export default SearchApi;