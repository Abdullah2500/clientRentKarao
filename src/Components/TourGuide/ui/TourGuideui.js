import { Row, Card, Col, Form, Input, Select, InputNumber, Button } from 'antd';
import Standard from './dropzone';
import '../assets/TourGuide.css';
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const { Option } = Select;
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const AppTourGuide = (props) => {
    const { onFinish, onFinishFailed, msg, setImage } = props;

    function onChange(values) {
        console.log('onChange values = ', values)
    }
    // // Mobile prefix
    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //       <Select
    //         style={{
    //           width: 70,
    //         }}
    //       >
    //         <Option value="92">+92</Option>
    //       </Select>
    //     </Form.Item>
    //   );
    return (
        <div className="tourGuide">
            <Row gutter={[8, 8]}>
                <Col xs={{ span: 22 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }}>
                    <Card className="tourGuideCard">
                        <div className="titleHolder">
                            <h2>Provide Details for Tour Guide Registeration</h2>
                        </div>
                        {/* ///////////////// Name form ///////////////////////////// */}
                        <Form {...layout} name="register" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
                            <Form.Item
                                name='name'
                                label="Full Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            {/* //////////////////////////////////City/////////////////////////////// */}
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
                            {/* /////////////////////////////// Address form  //////////////////////////// */}
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
                            {/* /////////////////////////////// Education form//////////////////////////// */}
                            <Form.Item label="Education" name="education">
                                <Select
                                    onChange={onChange}
                                    allowClear
                                >
                                    <Option value="Matric" className="selectClass">Matric</Option>
                                    <Option value="HSSC" className="selectClass">HSSC</Option>
                                    <Option value="Graduation" className="selectClass">Graduation</Option>
                                    <Option value="Post Graduation" className="selectClass">Post Graduation</Option>
                                </Select>
                            </Form.Item>
                            {/* ///////////// Experience form /////////////// */}
                            <Form.Item
                                name='experience'
                                label="Experience In Years"
                                rules={[
                                    {
                                        type: 'number',
                                        min: 0,
                                        max: 20,
                                    },
                                ]} >
                                <InputNumber placeholder="2" style={{ width: "150px" }} />
                            </Form.Item>
                            {/* ///////////// Languages form /////////////// */}
                            <Form.Item
                                name='languages'
                                label="Languages"
                                rules={[
                                    {
                                        type: 'number',
                                        min: 0,
                                        max: 10,
                                    },
                                ]} >
                                <InputNumber placeholder="4" style={{ width: "200px" }} />
                            </Form.Item>
                            {/* /////////////////////////////// Available in Areas form//////////////////////////// */}
                            <Form.Item
                                name="availableArea"
                                label="Availabilty Area:"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            {/* ///////////// Age form /////////////// */}
                            <Form.Item
                                name='age'
                                label="Age"
                                rules={[
                                    {
                                        type: 'number',
                                        min: 0,
                                        max: 120,
                                    },
                                ]} >
                                <InputNumber placeholder="Enter Your Age in Years" style={{ width: "200px" }} />
                            </Form.Item>
                            {/* ///////////// Fee form /////////////// */}
                            <Form.Item
                                name='fee'
                                label="Fee"
                                rules={[
                                    {
                                        type: 'number',
                                        min: 0,
                                        max: 30000,
                                    },
                                ]} >
                                <InputNumber placeholder="Per day Fee e.g 3000" style={{ width: "180px" }} />
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
                            {/* ////////////////////// Introduction Form ///////////////////// */}
                            <Form.Item name='introduction' label="Introduction">
                                <Input.TextArea />
                            </Form.Item>

                            {/* /////////////////////////////////// */}

                            <Standard setImage={setImage} />


                            {/* ///////////////////////////////////// */}

                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default AppTourGuide;