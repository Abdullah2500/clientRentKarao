import React from 'react';
import '../assets/eachPost.css';
import {Col, Row,Divider, Image } from 'antd';

const Eachpost = (props) => {
    const { post } = props;
    console.log('post of Eachpost=', post);
    return (
        <div className="parentClassofEach">
            <Row gutter={[16, 48]}>
                <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 6 }}>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                <Image className="imageClass" style={{width:234, height:234}} src={post.image} alt="" />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                            <h3>ID: {post._id}</h3>
                            <h3>Address: {post.city}</h3>
                            <h3>Address: {post.address}</h3>
                            <h3>Place Type: {post.placeType}</h3>
                            <h3>Guests: {post.guests}</h3>
                            <h3>Bedrooms: {post.bedrooms}</h3>
                            <h3>Bathrooms: {post.bathrooms}</h3>
                            <h3>Services: {post.otherServices }</h3>
                            <h3>Reg. by: {post.OwnerOfPlace}</h3>
                            <h3>Fee: {post.fee}</h3>
                            <Divider></Divider>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                </Col>
            </Row>
            </div>
    )
}
export default Eachpost;