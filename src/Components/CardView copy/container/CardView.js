import React, { useState } from 'react';
import { withRouter } from 'react-router';
import CardViewApi from '../api/cardViewApi';
import AppCardView from '../ui/CardViewui';
import { ContextOne, ContextOneConsumer } from '../../context/contexts';

const CardViewContainer = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [msg, setMsg] = useState('');
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['checkin'];
    const values = {
        ...fieldsValue,
        'checkin': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
    };
    console.log('Received values of form: ', values);
    CardViewApi(values)
      .then((result) => {
        if (result) {
          if (result.success === true) {
            console.log('result in .then ', result)
            // localStorage.setItem('accessToken', result.token);
            // setMsg('success');
          }
          if (result.success === false) {
            alert('You Should have to be logged in');
          }
          setMsg(result);
        }
        else {
          alert('Some Server Error');
        }
      })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed!', errorInfo);
  };
  return <AppCardView onFinish={onFinish} onFinishFailed={onFinishFailed} msg={msg}/>;
}

export default withRouter(CardViewContainer);