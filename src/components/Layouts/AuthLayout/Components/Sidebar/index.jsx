import React from "react";
import "./sidebar.scss";
import { Layout, Menu, Drawer } from "antd";
import Logo from "../../../../../assets/headerlogo.svg";
import logoIccon from "../../../../../assets/Group.svg";
import { items } from "../../../../../utils/constants";
import SideMenuContent from "./Components/SideMenuContent";
const { Sider } = Layout;

const SidebarAdmin = ({
  collapsed,
  setCollapsed,
  isMobile,
  mobileDrawerOpen,
  setMobileDrawerOpen,
}) => {
  return (
    <div>
      {/* Desktop Sider - Fixed */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="fixed left-0 top-0 bottom-0 hidden md:block overflow-y-auto !bg-[#212631] z-10 h-[100vh]"
          theme="dark"
          width={250}
        >
          <SideMenuContent
            items={items}
            logoIccon={logoIccon}
            Logo={Logo}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMobile={isMobile}
          />
        </Sider>
      )}

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        closable={false}
        width={300}
        className="md:hidden !bg-[#212631] p-0"
      >
        <SideMenuContent
            items={items}
            logoIccon={logoIccon}
            Logo={Logo}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isMobile={isMobile}
          />
      </Drawer>
    </div>
  );
};

export default SidebarAdmin;
