import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined, FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import '../assets/Loginui.css';
import {useHistory} from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
    md: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
    md: {
      span: 12,
    },
  },
};



const AppLogin = (props) => {
  const { onFinish, onFinishFailed, msg } = props;
  
  const history = useHistory();
  function singupForm(){
      history.push('/signup')
    }
  return (
    <div className="LoginParent">
      <div className="login">
        <Row gutter={[8, 8]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }}>
            <Card className="cardClass">
              <div className="titleHolder">
                <h2>Login</h2>
              </div>
              <Form {...formItemLayout}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  label="E-mail:"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <>{msg === "Username is invalid!" ? (
                  <h4>{msg}</h4>
                ) : ""}</>
                <Form.Item
                  name="password"
                  label="Password:"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <>{msg === "Password is Invalid!" ? (
                  <h4>{msg} </h4>
                ) : ""}</>
                <Form.Item {...tailFormItemLayout}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="www.google.com">
                    Forgot password
                </a>
                </Form.Item>
                {/* ////////////// Login Button ///////////////////////// */}
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" block  htmlType="submit" className="login-form-button">
                    Login
               </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" block className="btnFacebook" icon={<FacebookFilled />} >
                      Login with facebook
                  </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" block className="btnGoogle" icon={<GoogleCircleFilled />} >
                      Login with Google +
                  </Button>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <h3>Don't have an account ?</h3>
                  </Form.Item>

                  <a className="login-form-Signup" onClick={singupForm}>
                    Sign Up
                </a>
                {/* <Link to="/signup">
                <Button type="link" style={{color:'black'}}>Link</Button>
                </Link> */}
                </Form.Item>

              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppLogin;