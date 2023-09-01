import React, { useState } from 'react'
import { Layout, Menu, theme } from 'antd';
import HeaderLayout from './Header'; 
import FooterLayout from './Footer'
import PageContent from '../App'
import SiderLayout from './Sider';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <SiderLayout />
      <Layout>
          <HeaderLayout />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            }}
          >
            <PageContent/>
        </Content>
        <FooterLayout/>
      </Layout>
    </Layout>
  );
};

export default App;