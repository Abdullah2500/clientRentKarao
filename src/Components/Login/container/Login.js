import React, { useState } from 'react';
import loginApi from '../../Login/api/loginapi';
import {withRouter} from 'react-router-dom';
import AppLogin from '../ui/loginui';
import {ContextOne, ContextOneConsumer} from '../../context/contexts';
import {useHistory} from 'react-router-dom';

const LoginContainer = (props) => {
  let {state, dispatch} = React.useContext(ContextOne);
  const [msg, setMsg] = useState();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        loginApi(values)
        .then((result) =>{
          if(result){
            if(result.success === true){
              localStorage.setItem('accessToken', result.token);
              dispatch({ type:'login', payload:result.data });
              {result.data.admin===true?
              props.history.push('/adminDashboard'):
              props.history.push('/dashboard')}
            }
            else if(result.Message === 'Not Valid Email/Username'){
              setMsg(result.Message);
            }
            else if(result.Message === 'incorrect password'){
              setMsg(result.Message);
            }
          }
          else {   //
            alert('Some Server Error');
          }
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return <AppLogin onFinish = {onFinish} onFinishFailed = {onFinishFailed}/>
}
 
export default withRouter(LoginContainer);