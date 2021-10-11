// const {  Menu  } = antd;
// const {  HomeOutlined, AppstoreOutlined, SettingOutlined  } = icons;

// const { SubMenu } = Menu;

// class App extends React.Component {
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

//   render() {
//     const { current } = this.state;
//     return (
//       <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
//         <Menu.Item key="mail" icon={<HomeOutlined />}>
//           Places To Stay
//         </Menu.Item>
//         <Menu.Item key="app" enababled icon={<AppstoreOutlined />}>
//           Experience
//         </Menu.Item>
//         <Menu.Item key="app" enababled icon={<SettingOutlined />}>
//           Become A Provider
//         </Menu.Item>

//       </Menu>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);