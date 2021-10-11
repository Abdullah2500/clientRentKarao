import React from 'react';
import { Row, Col } from 'antd';
import '../assets/about.css';

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: 'lorem Lorem Ipsum is simply dummy text of the printing',
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: 'lorem Lorem Ipsum is simply dummy text of the printing',
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Simplified Workflow',
        content: 'lorem Lorem Ipsum is simply dummy text of the printing',
    }
]
const Appabout = () => {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h1>About Us</h1>
                    <p>lorem Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className="contentHolder">
                    <p> and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item =>{
                        return(
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                   <div className="icon">
                                     {item.icon}
                                   </div>
                                   <h3>{item.title}</h3>
                                   <p>{item.content}</p>
                                </div>

                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default Appabout;