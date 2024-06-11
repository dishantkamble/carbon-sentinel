import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Typography, FloatButton, Layout, Switch, Flex, theme } from 'antd';
import { SmileOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import Joke from './pages/Joke';
import Home from './pages/Home';

function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const [open, setOpen] = useState(true);
  const [currentThemes, setCurrentThemes] = useState([theme.defaultAlgorithm, theme.compactAlgorithm]);
  const [themeBackground, setThemeBackground] = useState('white');

  const onClick = (checked) => {
    setOpen(checked);
    console.log('onClick (Open)? = ' + open);
  };

  const changeCurrentThemes = (value) => {
    setCurrentThemes(value ? [theme.darkAlgorithm, theme.compactAlgorithm] : [theme.defaultAlgorithm, theme.compactAlgorithm]);
    setThemeBackground(value ? '#282828' : '#ffffff');
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: currentThemes,
        components: {
          Layout: {
            headerBg: themeBackground,
            headerPadding: `0 24px`,
            footerBg: themeBackground,
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
            <Title onClick={event => window.location.href = '/'}>Carbon Sentinel</Title>
            <Switch size='small'
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              onChange={changeCurrentThemes}
            />
          </Flex>
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 1200 }}>
              <Router>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/joke' element={<Joke />} />
                </Routes>
              </Router>
            </Content>
          </Layout>
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
