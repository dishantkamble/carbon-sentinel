import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Typography, FloatButton, Layout, Switch, Flex  } from 'antd';
import { SmileOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import Joke from './pages/Joke';
import Home from './pages/Home';

function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState('light');

  const onClick = (checked) => {
    setOpen(checked);
    console.log('onClick (Open)? = ' + open);
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: 'white',
            headerColor: 'black',
            headerPadding: `0 24px`,
            footerBg: 'white',
          },
        },
        token: {
          fontFamily: 'Futura, system-ui, sans-serif, emoji, math',        
        }
      }}>
      <Layout>
        <Header style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Flex justify="space-between" align="center" flex="auto">
            <Title>Carbon Sentinel</Title>
            <Switch size='small'
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              onChange={changeTheme} />
          </Flex>
        </Header>
        <Content style={{
          padding: 20,
          borderRadius: 4,
        }}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/joke' element={<Joke />} />
            </Routes>
          </Router>
        </Content>
        <Footer style={{
            textAlign: 'center',
          }}>
          Carbon Sentinel - {new Date().getFullYear()}
        </Footer>
      </Layout>
      <FloatButton icon={<SmileOutlined />} onClick={onClick} />
    </ConfigProvider>
  );
}

export default App;
