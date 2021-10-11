import React from 'react';
import '../assets/Signup.css';
import { Form, Input, Row, Col, Card, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
// const { Option } = Select;

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

const AppSignup = (props) => {
  const [form] = Form.useForm();
  const { onFinish, onFinishFailed } = props;
  const history = useHistory();
  function loginForm(){
      history.push('/login')
    }
  return (
    <div className="signupParent">
      <div className="signupForm">
        <Row gutter={[8, 8]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }}>
            <Card className="signupCard">
              <div className="titleHolder">
                <h2>Sign Up</h2>
              </div>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                  prefix: '92',
                }}
                scrollToFirstError
              >
                {/* /////////////////////// First Name and Last Name Sign Up Form ///////////////////////// */}
                <Form.Item
                  name="firstname"
                  label="First Name"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      message: 'Please input your firstname!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="John" />
                </Form.Item>

                <Form.Item
                  name="lastname"
                  label="Last Name"
                  tooltip="What do you want others to call you?"
                  rules={[
                    {
                      message: 'Please input your lastname!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input placeholder="Mike" />
                </Form.Item>

                {/* ///////////////// Username form //////////////////// */}
                <Form.Item
                  name="username"
                  label="E-mail"
                // rules={[
                //   {
                //     type: 'email',
                //     message: 'The input is not valid E-mail!',
                //   },
                //   {
                //     required: true,
                //     message: 'Please input your E-mail!',
                //   },
                // ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="abc@gmail.com" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password 
                     prefix={<LockOutlined className="site-form-item-icon" />}
                     type="password"
                     placeholder="Password" 
                    />
                </Form.Item>

                {/* <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item> */}
                

                {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item> */}

                {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="www.google.com">agreement</a>
        </Checkbox>
      </Form.Item> */}
                  <Form.Item {...tailFormItemLayout}>
                   <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form" onClick={loginForm}>
                      Already have an Account ?
                    </a>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" block htmlType="submit" className="login-form-button">
                      Register
                    </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                   <Button type="primary" block className="buttonFacebook" icon={<FacebookFilled />} >
                      Sign Up with facebook
                  </Button>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                   <Button type="primary" block className="buttonGoogle" icon={<GoogleCircleFilled />} >
                      Sign Up with Google +
                   </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppSignup;