import React from 'react';
import '../assets/becomeAHost.css';
import { Row, Card, Col, Typography, Space, Modal } from 'antd';
import { Form, Input, Select, Checkbox, Button, InputNumber } from 'antd';
import Standard from './dropzone';
const { Option } = Select;
const { Text } = Typography

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};


const AppBecomeAHost = (props) => {
  const { onFinish, onFinishFailed, msg, setImage } = props;

  function onChange(values) {
    console.log('onChange values = ', values)
  }

  function success() {
    const modal = Modal.success({
      title: 'Welcome',
      content: 'You have Successfully Registered the Palce!',
    });
    setTimeout(() => modal.destroy(), 10000);
  }
  return (
    <div className="hostParent">
      <div className="host">
        <Row gutter={[8, 8]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }}>
            <Card className="hostCard">
              <div className="titleHolder">
                <h2>Provide Details for Place Registeration</h2>
              </div>

              <Form name="register" {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>

                <Form.Item
                  name="city"
                  label="City:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                {/* ///////////////Address//////////////////////////// */}
                <Form.Item
                  name="address"
                  label="Address:"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                {/* ///////////// Place Type form //////////////////////////////////////////// */}
                <Form.Item label="Place Type" name="placeType">
                  <Select
                    onChange={onChange}
                    allowClear
                  >
                    <Option value="Single Room" className="selectClass">Single Room</Option>
                    <Option value="Double Room" className="selectClass">Double Room</Option>
                    <Option value="Family Room" className="selectClass">Family Room</Option>
                    <Option value="Apartment" className="selectClass">Apartment</Option>
                  </Select>
                </Form.Item>
                {/* ///////////// Guest form //////////////////////////////////////////// */}
                <Form.Item label="Guest" name="guests">
                  <Select
                    onChange={onChange}
                    allowClear
                  >
                    <Option value="1" className="selectClass">1</Option>
                    <Option value="2" className="selectClass">2</Option>
                    <Option value="3" className="selectClass">3</Option>
                    <Option value="4" className="selectClass">4</Option>
                    <Option value="5" className="selectClass">5</Option>
                    <Option value="6-10" className="selectClass">6-10</Option>
                  </Select>
                </Form.Item>
                {/* ///////////// Bedrooms form //////////////////////////////////////////// */}
                <Form.Item label="Bedrooms" name="bedrooms">
                  <Select
                    onChange={onChange}
                    allowClear
                  >
                    <Option value="1" className="selectClass">1</Option>
                    <Option value="2" className="selectClass">2</Option>
                    <Option value="3" className="selectClass">3</Option>
                    <Option value="4" className="selectClass">4</Option>
                    <Option value="5-10" className="selectClass">5-10</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Bathrooms" name="bathrooms">
                  <Select
                    onChange={onChange}
                    allowClear
                  >
                    <Option value="1" className="selectClass">1</Option>
                    <Option value="2" className="selectClass">2</Option>
                    <Option value="3" className="selectClass">3</Option>
                    <Option value="4-5" className="selectClass">4-5</Option>
                  </Select>
                </Form.Item>
                {/* /////////////// Mobile Number /////////////////////*/}
                <Form.Item
                            name="mobNumber"
                            label="Phone No:"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                // addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                {/* ///////////// Other Services form //////////////////////////////////////////// */}
                <Form.Item name="otherServices" label="Other Services">
                  <Checkbox.Group  >
                    <Row gutter={[48, 8]}>
                      <Col span={12}>
                        <Checkbox
                          value="Food"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Food
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Parking"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Parking
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="TourGuide"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Tour Guide
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Car Booking"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Car Booking
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Laundry"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Laundry
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Kitchen"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Kitchen
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Wifi"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Wifi
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Heater"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Heater
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Dryer"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Dryer
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          value="Others"
                          style={{
                            lineHeight: '32px',
                          }}
                        >
                          Others
                        </Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
                {/* ///////////// Fee form /////////////// */}
                <Form.Item
                  name="fee"
                  label="Fee"
                  rules={[
                    {
                      type: 'number',
                      min: 0,
                      max: 30000,
                    },
                  ]} >
                  <InputNumber placeholder="Enter Fee of the Place" style={{ width: "200px" }} />
                </Form.Item>

                {/* ///////////// DropZone Component form Call /////////////// */}


                <Standard setImage={setImage} />
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 11, offset: 5 }} >
                  <Space direction="horizontal"><Text mark>Hint: Upload 1 clear image of Place</Text></Space>
                </Col>
                {/* ///////////// Submit Button form /////////////// */}
                <Form.Item label=" " colon={false}>
                  <Button type="primary" onClick={success} htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <Col>

              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppBecomeAHost;