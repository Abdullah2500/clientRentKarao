import React from 'react';
import { callApi } from '../../../config/callApi';
const SearchApi = async (data) => {
  try {
    const city = data.city;
    const experience = data.experience;
    const fee = data.fee;
    let method = 'GET';

    let queryResult = await callApi("/tourGuide/search/" + city + "/" + experience + "/" + fee, method, null);
    console.log('querResult.data in SearchApi for tour guide= ', queryResult.data);
    return queryResult.data;

  } catch (e) {
    console.log(e);
  }
}

export default SearchApi;