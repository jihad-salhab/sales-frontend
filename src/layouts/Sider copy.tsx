import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';

import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SiderLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/dashboard">dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard">dashboard</Link>
        </Menu.Item>
      </Menu>
  </Sider>
  );
};

export default SiderLayout;