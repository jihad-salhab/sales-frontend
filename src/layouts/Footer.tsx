import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import HeaderLayout from './Header'; 
import PageContent from '../App'
const { Footer } = Layout;

const FooterLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
        <Footer>
            <p>Developed By Hesk</p>
        </Footer>
  );
};

export default FooterLayout;