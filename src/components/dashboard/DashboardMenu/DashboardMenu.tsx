"use client";
import React, { ReactNode } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
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
    label: "Issue certificate",
    path: "/issue-certificate",
  },
].map((item) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.label,
}));


type DashboardMenuProps = {
  children: ReactNode
}

const DashboardMenu: React.FC<DashboardMenuProps> = ({children}) => {
  const router = useRouter();

  const menuSwitch: MenuProps["onClick"] = (e) => {
    router.push(`http://localhost:3000/dashboard/${e.key}`);
  };

  return (
    <div className="min-h-[100vh] bg-white">
      <Header
        className="flex items-center"
        style={{ padding: 0, background: "white" }}
      >
        <img src="/logo/logo.svg" className=" ml-10 size-20" alt="" />
      </Header>

      <Layout className="min-h-[100%]">
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
            className="min-h-[100%] bg-white"
            mode="inline"
            defaultSelectedKeys={[""]}
            items={items}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
            className="min-h-[77vh] scroll-y-auto"
              style={{
                padding: 24,
                background: "white",
                borderRadius: "20",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Uzzal Motors ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardMenu;
