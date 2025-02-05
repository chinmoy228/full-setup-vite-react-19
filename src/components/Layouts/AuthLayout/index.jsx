import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AdminHeader from "../AuthLayout/Components/Header/index";
import SidebarAdmin from "../AuthLayout/Components/Sidebar/index";

const { Content } = Layout;

const AuthLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileDrawerOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate margin class based on conditions
  const getMarginClass = () => {
    if (isMobile) {
      return collapsed ? 'ml-0' : 'ml-0';  // Mobile view always has 0 margin
    } else {
      return collapsed ? 'ml-20' : 'ml-[250px]';  // Desktop view: 80px when collapsed, 250px when expanded
    }
  };

  return (
    <Layout className="min-h-screen">
      <SidebarAdmin
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
        mobileDrawerOpen={mobileDrawerOpen}
        setMobileDrawerOpen={setMobileDrawerOpen}
      />
      
      <Layout className={`min-h-screen transition-all duration-300 ${getMarginClass()}`}>
        <AdminHeader
          isMobile={isMobile}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        
        <Content className="mx-4 mt-20 rounded-md md:mt-20 h-[200vh] bg-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;