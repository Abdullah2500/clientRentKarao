import React from 'react';
import '../assets/homeModal.css';
import { useState } from 'react';
import { Modal, Button } from 'antd';


const AppWork = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
        <div className="block worksBlock">
        <div className="container-fluid">
            <div className="titleHolder">
                <h2>How It Works</h2>
                <p>Lorem Ipsum dollar amit sta nia oghaim</p>
            </div>
            <div className="contentHolder">
            <Button onClick={showModal}>
          <i className="fas fa-play"></i>
        </Button>
            </div>
        <Modal title="How it Works" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <iframe width="470" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="Adnan"></iframe>
        </Modal>
        </div>
    </div>
          
    );
  };
export default AppWork;