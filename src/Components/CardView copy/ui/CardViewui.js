import React from 'react';
import CardViewApi from '../api/cardViewApi';
import { Row, Col, Image, Button, Typography, Space, Divider } from 'antd';
import { Form, DatePicker } from 'antd';
import '../assets/CardView.css';
const { RangePicker } = DatePicker;
const { Text } = Typography

const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: 'Please select Check-in and Check-out Date!',
        },
    ],
};
const AppCardViewTourGuide = (props) => {
    //const { onFinish, onFinishFailed, msg } = props;
    const { places } = props;
    console.log('places in CardView = ', places);
    const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const rangeValue = fieldsValue['checkin'];
        const values = {
            ...fieldsValue,
            'checkin': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
        };
        console.log('Received values of form: ', values);
        values.placeId = places._id;
        CardViewApi(values)
            .then((result) => {
                if (result) {
                    console.log('result in CardViewui adnan = ', result)
                    if (result.success === true) {
                        console.log('result in .then ', result)
                        // localStorage.setItem('accessToken', result.token);
                        // setMsg('success');
                    }
                    if (result.success === false) {
                        alert('You Should have to be logged in');
                    }
                    // setMsg(result);
                }
                else {
                    alert('Some Server Error');
                }
            })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed!', errorInfo);
    };
    return (
        <div className="parentClass">
            <div className="cardViewClass">
                {/* <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }}>
                        <div className="titleHolder">
                            <h2>Room Details</h2>
                        </div>
                    </Col>
                </Row> */}
                <Row gutter={[16, 48]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>

                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                        <div>
                            <Image className="imageClass"
                                style={{ width: 234, height: 234 }} src={places.image} alt=""
                            />
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                        <div>
                            <h3>ID: {places._id}</h3>
                            <h2>Name: {places.name}</h2>
                            <h2>City: {places.city}</h2>
                            <h2>Address: {places.address}</h2>
                            <h2>Education: {places.education}</h2>
                            <h2>Experience: {places.experience}</h2>
s
                        </div>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                    </Col>
                </Row>
                <Form name="register" onFinish={onFinish} >
                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12, offset: 6 }} >
                            <h2>Check in</h2>
                            <Form.Item name="checkin" {...rangeConfig}>
                                <RangePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[48, 8]}>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6, offset: 6 }} >
                            <h3 className="font-weight-bold">Price per day : <span className="badge badge-info">Rs.</span> {places.fee * 1}</h3>
                            <Space direction="horizontal"><Text mark>Check-in time is from 9 am to 12 pm</Text></Space>
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} >
                            <h3 className="font-weight-bold">Total Price to be paid : <span className="text-primary">Rs.</span> {places.fee * 1}</h3>
                            <Button type="primary" htmlType="submit">
                                Book Now!
                            </Button>

                            <Divider></Divider>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}
export default AppCardViewTourGuide;