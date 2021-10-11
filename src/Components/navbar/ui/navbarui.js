import React, { useState } from 'react';
import '../assets/navbarui.css';
import { ContextOne } from '../../context/contexts';
import { Menu } from 'antd';
import LogoRent from '../assets/RentLogo.png';
import { Drawer, Button } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined,
  IdcardOutlined,
  ImportOutlined,
  UserAddOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbarui = () => {
  let { state, dispatch } = React.useContext(ContextOne);
  console.log(state.status);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  //   var logg="";
  // if(state.userData.username == "khyber788@gmail.com")
  // logg=true;
  // console.log('logg of admin username',logg)

  var log = "";
  if (state.status === "login")
    log = state.status;

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <Link to="/"><img src={LogoRent} style={{ width: 70 }} alt="logo"></img>
          </Link>
        </div>
        <div className="mobileHidden">
          <Menu mode="horizontal">
            <Menu.Item key="PlacesToStay" icon={<HomeOutlined />}>Places To Stay<Link to="/"></Link></Menu.Item>
            <Menu.Item key="BecomeAProvider/search" icon={<SearchOutlined />}><Link to="/search">Search Place</Link></Menu.Item>
            <Menu.Item key="searchTourGuide" icon={<SearchOutlined />}><Link to="/searchTourGuide">Search Guide</Link></Menu.Item>
            <Menu.Item key="onlineExperience" icon={<DesktopOutlined />}>Experience<Link to="/experience"></Link></Menu.Item>
            <Menu.Item key="BecomeAProvider" icon={<IdcardOutlined />}>Become A Host<Link to="/becomeAHost"></Link></Menu.Item>
            <Menu.Item key="tourGuide" icon={<ImportOutlined />}>Become A Tour Guide<Link to="/tourGuide"></Link></Menu.Item>
            {/* {log !== "login" ?(
              <Menu.Item key="SignUp" icon={<UserAddOutlined />}>Sign Up<Link to="/Signup"></Link></Menu.Item>) : (<Menu.Item></Menu.Item>)
            } */}
            {log !== "login" ? (
              <Menu.Item key="Login" icon={<LoginOutlined />}>Login<Link to="/login"></Link></Menu.Item>) : (<Menu.Item></Menu.Item>)
            }
            {log === "login" ? (
              <Menu.Item key="dashboard" icon={<LoginOutlined />}>{state.userData.firstname}<Link to="/dashboard"></Link></Menu.Item>) : (<Menu.Item></Menu.Item>)
            }
          </Menu>
        </div>
        <div className="mobileVisible">
          <Button type="primary" style={{ borderRadius: 7 }} onClick={showDrawer}><MenuFoldOutlined />
          </Button>
          <Drawer
            title="RentKarao"
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <Menu mode="vertical" >
              <Menu.Item key="PlacesToStay" icon={<HomeOutlined />}><Link to="/">Places To Stay</Link></Menu.Item>
              <Menu.Item key="BecomeAProvider/search" icon={<SearchOutlined />}><Link to="/search">Search A Place</Link></Menu.Item>
              <Menu.Item key="onlineExperience" icon={<DesktopOutlined />}><Link to="/experience">Experience</Link></Menu.Item>
              <Menu.Item key="BecomeAProvider" icon={<IdcardOutlined />}><Link to="/becomeAHost">Become A Host</Link></Menu.Item>
              <Menu.Item key="tourGuide" icon={<IdcardOutlined />}><Link to="/tourGuide">Become A Tour Guide</Link></Menu.Item>
              {log !== "login" ? (
                <Menu.Item key="SignUp" icon={<UserAddOutlined />}>Sign Up<Link to="/Signup"></Link></Menu.Item>) : ""
              }
              {log !== "login" ? (
                <Menu.Item key="Login" icon={<LoginOutlined />}>Login<Link to="/login"></Link></Menu.Item>) : ""
              }
              {log === "login" ? (
                <Menu.Item key="dashboard" icon={<LoginOutlined />}>{state.userData.firstname}<Link to="/dashboard"></Link></Menu.Item>) : (<Menu.Item></Menu.Item>)
              }
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
export default Navbarui;