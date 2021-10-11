import React from 'react';
import { Divider, Row, Col, Image } from 'antd';
import '../assets/adminDash.css';

const ShowAllTourGuidesinDB = (props) => {
    const { post } = props;
    return (
        <Row>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                <div>
                    <Image className="imageClass"
                        style={{ width: 234, height: 234 }} src={post.image} alt=""
                    />
                </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
                <h3>ID: {post._id}</h3>
                <h3>Name: {post.name}</h3>
                <h3>Address: {post.address}</h3>
                <h3>Education: {post.education}</h3>
                <h3>Experience: {post.experience}</h3>
                <h3>Languages: {post.languages}</h3>
                <h3>Availability Area: {post.availableArea}</h3>
                <h3>Age: {post.age}</h3>
                <h3>Fee: {post.fee}</h3>
                <h3>Mob.No: {post.mobNumber}</h3>
                <h3>Introduction: {post.introduction}</h3>
                <Divider style={{ height: "20%" }}></Divider>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
            </Col>
        </Row>
    )
}
export default ShowAllTourGuidesinDB;