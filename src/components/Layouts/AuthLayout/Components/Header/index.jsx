import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Button, Avatar } from "antd";

const { Header } = Layout;

const AdminHeader = ({
  isMobile,
  setMobileDrawerOpen,
  collapsed,
  setCollapsed,
}) => {
  return (
    <div>
      <Header
        className="fixed top-0 right-0 !bg-white p-0 flex items-center justify-between shadow-sm z-50 w-full transition-all duration-300 "
        style={{
          width: isMobile
            ? "100%"
            : `calc(100% - ${collapsed ? "80px" : "250px"})`,
        }}
      >
        <div className="flex items-center">
          {isMobile ? (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setMobileDrawerOpen(true)}
              className="w-16 h-16"
            />
          ) : (
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="w-16 h-16"
            />
          )}
          <h1 className="text-lg font-semibold md:hidden">Admin Panel</h1>
        </div>
        <div className="px-4 flex items-center space-x-4">
          <Avatar icon={<UserOutlined />} />
          <span className="hidden md:inline">Admin User</span>
        </div>
      </Header>
    </div>
  );
};

export default AdminHeader;
