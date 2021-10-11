import React from 'react';
import { Divider, Row, Col, Image } from 'antd';
import '../assets/adminDash.css';

const ShowAllUserInDB = (props) => {
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
                <h3>First Name: {post.firstname}</h3>
                <h3>Last Name: {post.lastname}</h3>
                <h3>Username: {post.username}</h3>
                <h3>Admin: {post.admin}</h3>
                <Divider style={{ height: "20%" }}></Divider>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
            </Col>
        </Row>
    )
}
export default ShowAllUserInDB;