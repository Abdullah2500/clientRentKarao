import React, {useState} from 'react';
import AppSignup from '../ui/Signupui';
import SignupApi from '../api/SignupApi';
import { withRouter } from 'react-router';
import {ContextOne, ContextOneConsumer} from '../../context/contexts';

const SignupContainer = (props) => {
  let {state, dispatch} = React.useContext(ContextOne);
  const [msg, setMsg] = useState();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        SignupApi(values)
        .then((result) =>{
          if(result){
            if(result.success === true){
              console.log('result in .then block = ',result);
              localStorage.setItem('accessToken', result.token);
              dispatch({type:'login', payload:result.data});
              props.history.push('/dashboard')
            }
            else if(result.success === false){
                setMsg(result.Message);
            }
            else if(result.success === false){
            setMsg(result.Message);
            }
          }
          else{
            alert('Some Server Error')
          }
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return <AppSignup onFinish={onFinish} onFinishFailed={onFinishFailed}/>
}
 
export default withRouter(SignupContainer);