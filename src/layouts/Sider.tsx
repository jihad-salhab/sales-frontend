import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';

import { Link, BrowserRouter as Router } from 'react-router-dom';

const { Sider } = Layout;

const SiderLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  }   
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Router>
       <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/dashboard">dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <p onClick={logout}>Logout</p>
          </Menu.Item>
        </Menu>
    </Router>

  </Sider>
  );
};

export default SiderLayout;