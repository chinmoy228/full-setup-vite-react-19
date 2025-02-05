import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { userData, items } from "../../../../../../../utils/constants";

const { SubMenu } = Menu;

const SideMenuContent = ({ collapsed, isMobile, logoIccon, Logo }) => {
  const [menuData, setMenuData] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const permittedModules =
      userData?.data?.user?.role?.[0].modules?.map((module) => module.key) ||
      [];

    const filterMenuItems = (menuItems) => {
      return menuItems
        .map((item) => {
          if (
            item.defaultAccess ||
            (item.access && permittedModules.includes(item.access))
          ) {
            return item;
          }

          if (item.isSubmenu && item.SubMenu) {
            const hasPermission = item.multipleAccess?.some((access) =>
              permittedModules.includes(access)
            );

            if (hasPermission) {
              const filteredSubMenu = item.SubMenu.filter((subItem) =>
                permittedModules.includes(subItem.access)
              );

              if (filteredSubMenu.length > 0) {
                return { ...item, SubMenu: filteredSubMenu };
              }
            }
          }
          return null;
        })
        .filter(Boolean);
    };

    setMenuData(filterMenuItems(items));
  }, []);
  useEffect(() => {
    const activeItem = findActiveItem(menuData, location.pathname);
    setActiveKey(activeItem?.key);
  }, [menuData, location]);

  const findActiveItem = (items, pathname) => {
    for (const item of items) {
      if (isActive(item.route, pathname)) {
        return item;
      }
      if (item.isSubmenu && item.SubMenu) {
        const activeSubItem = findActiveItem(item.SubMenu, pathname);
        if (activeSubItem) {
          return activeSubItem;
        }
      }
    }
    return null;
  };

  const isActive = (path) => {
    const currentPathname = location.pathname;
    return currentPathname === path || currentPathname.startsWith(path + "/");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-16 fixed left-0 pt-3 px-4 w-full bg-[#242b3b] z-10">
        {collapsed && !isMobile ? (
          <img src={logoIccon} alt="Logo Icon" className="h-10" />
        ) : (
          <img src={Logo} alt="Logo" className="h-10" />
        )}
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeKey]}
        defaultOpenKeys={[menuData?.find((item) => isActive(item.route))?.key]}
        className="border-r-0 flex-1 bg-inherit mt-16 overflow-y-auto"
      >
        {menuData?.map((item) =>
          item?.isSubmenu ? (
            <SubMenu
              key={item.key}
              title={
                <>
                  {item.icon}
                  <span>{item.label}</span>
                </>
              }
            >
              {item.SubMenu.map((subItem) => (
                <Menu.Item
                  key={subItem.key}
                  className={isActive(subItem.route) ? "bg-primary" : ""}
                >
                  <NavLink to={subItem.route}>
                    {subItem.icon}
                    <span>{subItem.label}</span>
                  </NavLink>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              key={item.key}
              className={isActive(item.route) ? "bg-primary" : ""}
            >
              <NavLink to={item.route}>
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
};

export default SideMenuContent;
