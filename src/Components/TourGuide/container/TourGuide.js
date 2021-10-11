import React, { useState } from 'react';
import { withRouter } from 'react-router';
import TourGuideApi from '../api/TourGuideApi';
import AppTourGuide from '../ui/TourGuideui';
import { ContextOne, ContextOneConsumer } from '../../context/contexts';

const TourGuideContainer = (props) => {
  let { state, dispatch } = React.useContext(ContextOne);
  const [msg, setMsg] = useState('');
  const [image, setImage] = useState([]);
  const onFinish = (values) => {
    values.image = image[0];
    console.log('Received values of form: ', values);
    TourGuideApi(values)
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
  return <AppTourGuide onFinish={onFinish} onFinishFailed={onFinishFailed} msg={msg} setImage={setImage} />;
}

export default withRouter(TourGuideContainer);