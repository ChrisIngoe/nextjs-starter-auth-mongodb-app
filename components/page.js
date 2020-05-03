import Link from 'next/link';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

export default function Page({ children }) {
  return (
    <>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link href="/">
                <a>Home</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/store">
                <a>Store</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/about">
                <a>About</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <LaptopOutlined />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <NotificationOutlined />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <main>{children}</main>
            </Content>
          </Layout>
        </Layout>
        <Footer className="footer">footer stuff</Footer>
        <style jsx>{`
          .ant-layout-header {
            background: #fff;
          }
          .logo {
            width: 120px;
            height: 31px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px 28px 16px 0;
            float: left;
          }
          .site-layout-background {
            background: #fffff;
          }
          .logo {
            background: rgba(255, 255, 255, 0.3);
          }
          .footer {
            color: #asdasd;
            background-color: #asdasd;
          }
        `}</style>{' '}
      </Layout>
      ,
    </>
  );
}
