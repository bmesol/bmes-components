import React from "react";
import { SidebarProps, SidebarChildProps, SidebarTriggerProps, SidebarMenuItemProps } from "./DTOs";
import { ReactComponent as CloseIcon } from "./../../../assets/Images/close-icon.svg";
import "./Sidebar.scss";

const SidebarTrigger = ({ sidebarId, children }: SidebarTriggerProps) => {
  return (
    <div data-bs-toggle="offcanvas" data-bs-target={`#${sidebarId}`} aria-controls="offcanvasRight">
      {children}
    </div>
  );
};

const SidebarHeader = ({ children }: SidebarChildProps) => {
  return <>{children}</>;
};

const SidebarMenuItems = ({ children }: SidebarChildProps) => {
  return <div className="sidebar-menu-items">{children}</div>;
};

const SidebarMenuItem = ({ href, target, icon, children }: SidebarMenuItemProps) => {
  return (
    <div className="py-3 border border-2 border-bottom-0">
      <a href={href} target={target} className="sidebar-menu-item text-decoration-none text-black">
        <span className="sidebar-menu-item-icon ms-3">{icon}</span>
        <span className="sidebar-menu-item-text ms-2">{children}</span>
      </a>
    </div>
  );
};

const SidebarFooter = ({ children }: SidebarChildProps) => {
  return <div className="sidebar-footer">{children}</div>;
};

const Sidebar = ({ id, children }: SidebarProps) => {
  const [header, menuItem, footer] = React.Children.toArray(children);
  return (
    <>
      <div className="offcanvas offcanvas-end sidebar" id={id}>
        <div className="text-end px-3">
          <button className="border border-0 bg-transparent close-icon" data-bs-dismiss="offcanvas">
            <CloseIcon />
          </button>
        </div>
        <div className="px-3">{header}</div>
        <div className="offcanvas-body p-0 my-4">{menuItem}</div>
        <div className="px-3">{footer}</div>
      </div>
    </>
  );
};

export { Sidebar, SidebarTrigger, SidebarHeader, SidebarMenuItems, SidebarMenuItem, SidebarFooter };
