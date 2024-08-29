"use client";
import React, { ReactNode } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Content, Footer, Sider } = Layout;

const items: MenuItem[] = [
  {
    icon: HomeOutlined,
    label: "Home",
    path: "",
  },
  {
    icon: UsergroupAddOutlined,
    label: "Add Employee",
    path: "add-employee",
  },
  {
    icon: TeamOutlined,
    label: "All Employee",
    path: "employee",
  },
  {
    icon: FileProtectOutlined,
    label: "Issue Certificate",
    path: "/issue-certificate",
  },
].map((item) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.label,
}));

type DashboardMenuProps = {
  children: ReactNode;
};

const DashboardMenu: React.FC<DashboardMenuProps> = ({ children }) => {
  const router = useRouter();

  const menuSwitch: MenuProps["onClick"] = (e) => {
    router.push(`http://localhost:3000/dashboard/${e.key}`);
  };

  return (
    <div className="min-h-[100vh] bg-white">
      <Header
        className="fixed w-full top-0 left-0 z-10"
        style={{ padding: 0, background: "white" }}
      >
        <div className="flex items-center h-full">
          <img src="/logo/logo.svg" className="ml-10 size-20" alt="Logo" />
        </div>
      </Header>

      <Layout className="min-h-[100%] mt-20 bg-white fixed h-full w-full top-0 left-0">
        <Sider
          className="mt-6"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            onClick={menuSwitch}
            theme="light"
            className="bg-white min-h-screen"
            mode="inline"
            defaultSelectedKeys={[""]}
            items={items}
          />
          <Footer
            className="w-full z-20 fixed bottom-0 left-0"
            style={{ textAlign: "center" }}
          >
            Uzzal Motors ©{new Date().getFullYear()}
          </Footer>
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px 125px",
              overflowY: "auto",
            }}
          >
            <div
              className="min-h-[75vh]"
              style={{
                padding: 24,
                background: "white",
                borderRadius: "20px",
                overflowY: "auto",
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardMenu;
