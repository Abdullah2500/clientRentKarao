import {callApi} from '../../../config/callApi';

const becomeAHostApi = async(data) => {
    const biuldFormData = (formData, data, parentKey)=>{
        if(
            data &&
            typeof data === 'object' &&
            !(data instanceof Date) &&
            !(data instanceof File)
        ){
            Object.keys(data).forEach((key) =>{
                biuldFormData(
                    formData,
                    data[key],
                    parentKey ? `${parentKey}[${key}]`: key
                );
            });
        } else{
            const value = data == null ? "": data;
            formData.append(parentKey, value);
        }
    };
    const jsonToFormData = (data) =>{
        const formData = new FormData();
        biuldFormData(formData, data)
        return formData;
    };
    const myData = jsonToFormData(data);
    try{
       let method = 'POST';
       let type = 'form';
       let queryResult = await callApi('/becomeAProvider', method, null, myData, type);
       console.log('queryResult = ',queryResult);
       return queryResult.data;
    }
    catch(e){
        console.log(e);
    }
}
export default becomeAHostApi;