import React from 'react';
import { Divider, Row, Col, Image } from 'antd';
import '../assets/adminDash.css';;

const ShowAllRegPlacesInDB = (props) => {
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
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
                <h3>ID: {post._id}</h3>
                <h3>Address: {post.city}</h3>                
                <h3>Address: {post.address}</h3>
                <h3>Place Type: {post.placeType}</h3>
                <h3>Guests: {post.guests}</h3>
                <h3>Bedrooms: {post.bedrooms}</h3>
                <h3>Bathrooms: {post.bathrooms}</h3>
                <h3>Services: {post.otherServices}</h3>
                <h3>Fee: {post.fee}</h3>
                <h3>Fee: {post.mobNumber}</h3>
                <Divider style={{ height: "20%" }}></Divider>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }}>
            </Col>
        </Row>
    )
}
export default ShowAllRegPlacesInDB;