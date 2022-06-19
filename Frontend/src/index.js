import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import { render } from "react-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, InfoCircleOutlined, FileOutlined, UserOutlined, LoginOutlined, UsergroupAddOutlined, LogoutOutlined } from "@ant-design/icons";
import "./index.css";
import "antd/dist/antd.css";

import logo from './logo.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

import Home from "./routes/home";
import AboutUs from "./routes/aboutUs";
import MyDrive from './routes/myDrive';
import Profile from "./routes/profile";
import Users from "./routes/users";
import Login from "./routes/login";
import Register from "./routes/register";
import Logout from "./routes/logout";
import NotFound from './routes/notFound';
import reportWebVitals from './reportWebVitals';

import { UserContext } from './contexts/AuthContext';

import { useCookies, CookiesProvider } from "react-cookie";

const { Header, Content, Footer, Sider } = Layout;

const Router = () => {
    return (
        <div>
            <React.StrictMode>
                <BrowserRouter>
                    <CookiesProvider>
                        <Routes>
                            <Route path='/' element={<Main />}>
                                <Route path='/' element={<Home />} />
                                <Route path='/aboutUs' element={<AboutUs />} />
                                <Route path='/myDrive' element={<MyDrive />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/users' element={<Users />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </CookiesProvider>
                </BrowserRouter>
            </React.StrictMode>
        </div>
    )
};

const Main = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [isImpressionate, setIsImpressionate] = useState(false);


    const [loginStatus, setLoginStatus] = useState(false);
    const [adminStatus, setAdminStatus] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            setLoginStatus(true)
            const decoded = jwt_decode(token);
            if (decoded.isAdmin) {
                setAdminStatus(true)
            }
        }
    }, [])

    if (loginStatus) {
        if (adminStatus) {
            return (
                <div>
                    <UserContext.Provider value={{ isAdmin, setIsAdmin, isLogged, setIsLogged, isImpressionate, setIsImpressionate }}>

                        <Layout style={{ minHeight: "100vh" }}>
                            <Sider>
                                <div className="logo">
                                    <img src={logo} />
                                </div>
                                <Menu id="menu" theme="dark" defaultSelectedKeys={[""]} mode="inline">
                                    <Menu.Item key="1" icon={<HomeOutlined />}>
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<UserOutlined />}>
                                        <Link to="/users">Users</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<UserOutlined />}>
                                        <Link to="/profile">Profil</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" icon={<LogoutOutlined />}>
                                        <Link to="/logout">Logout</Link>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0, textAlign: "center" }}>
                                    <h1 style={{ fontWeight: 900 }}>SupIdrive</h1>
                                </Header>
                                <Content style={{ margin: "0 16px" }}>
                                    <div className="site-layout-background" style={{ padding: 24, minHeight: "75vh", margin: "16px 0" }}>
                                        <Outlet />
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: "center" }}>
                                    ©2022 - 3PROJ - SUPIDRIVE - SUPINFO PROJECT
                                </Footer>
                            </Layout>
                        </Layout>
                    </UserContext.Provider>
                </div>
            );
        } else {
            return (
                <div>
                    <UserContext.Provider value={{ isAdmin, setIsAdmin, isLogged, setIsLogged, isImpressionate, setIsImpressionate }}>

                        <Layout style={{ minHeight: "100vh" }}>
                            <Sider>
                                <div className="logo">
                                    <img src={logo} />
                                </div>
                                <Menu id="menu" theme="dark" defaultSelectedKeys={[""]} mode="inline">
                                    <Menu.Item key="1" icon={<HomeOutlined />}>
                                        <Link to="/">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                                        <Link to="/aboutUs">About us</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<FileOutlined />}>
                                        <Link to="/myDrive">My Drive</Link>
                                    </Menu.Item>
                                    <Menu.Item key="4" icon={<UserOutlined />}>
                                        <Link to="/profile">Profil</Link>
                                    </Menu.Item>
                                    <Menu.Item key="5" icon={<LogoutOutlined />}>
                                        <Link to="/logout">Logout</Link>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0, textAlign: "center" }}>
                                    <h1 style={{ fontWeight: 900 }}>SupIdrive</h1>
                                </Header>
                                <Content style={{ margin: "0 16px" }}>
                                    <div className="site-layout-background" style={{ padding: 24, minHeight: "75vh", margin: "16px 0" }}>
                                        <Outlet />
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: "center" }}>
                                    ©2022 - 3PROJ - SUPIDRIVE - SUPINFO PROJECT
                                </Footer>
                            </Layout>
                        </Layout>
                    </UserContext.Provider>
                </div>
            );
        }
    } else {
        return (
            <div>
                <UserContext.Provider value={{ isAdmin, setIsAdmin, isLogged, setIsLogged, isImpressionate, setIsImpressionate }}>

                    <Layout style={{ minHeight: "100vh" }}>
                        <Sider>
                            <div className="logo">
                                <img src={logo} />
                            </div>
                            <Menu id="menu" theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                                <Menu.Item key="1" icon={<HomeOutlined />}>
                                    <Link to="/">Home</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                                    <Link to="/aboutUs">About us</Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<LoginOutlined />}>
                                    <Link to="/login">Login</Link>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
                                    <Link to="/register">Register</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout className="site-layout">
                            <Header className="site-layout-background" style={{ padding: 0, textAlign: "center" }}>
                                <h1 style={{ fontWeight: 900 }}>SupIdrive</h1>
                            </Header>
                            <Content style={{ margin: "0 16px" }}>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: "75vh", margin: "16px 0" }}>
                                    <Outlet />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: "center" }}>
                                ©2022 - 3PROJ - SUPIDRIVE - SUPINFO PROJECT
                            </Footer>
                        </Layout>
                    </Layout>
                </UserContext.Provider>
            </div>
        );
    }
};

render(<Router />, document.querySelector("#router"));
render(<Main />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();