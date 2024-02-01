import React from "react";
import { Button, ButtonVariants } from "./../../lib/components/Button/Button";
import { Sidebar, SidebarTrigger, SidebarHeader, SidebarMenuItems, SidebarMenuItem, SidebarFooter } from "../../lib/components/Sidebar/Sidebar";
import { ReactComponent as ProfileIcon } from "./../../assets/Images/profile-icon.svg";
import { ReactComponent as UserIcon } from "./../../assets/Images/users-icon.svg";
import { ReactComponent as ContactsIcon } from "./../../assets/Images/contacts-icon.svg";
import { ReactComponent as ClientsIcon } from "./../../assets/Images/clients-icon.svg";
import { ReactComponent as SitesIcon } from "./../../assets/Images/sites-icon.svg";
import { ReactComponent as WorkersIcon } from "./../../assets/Images/workers-icon.svg";
import { ReactComponent as SuppliersIcon } from "./../../assets/Images/suppliers-icon.svg";

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Menu = {
  render: (children: React.ReactElement) => {
    return (
      <>
        <SidebarTrigger>
          <Button variant={ButtonVariants.SUCCESS} label="Open Menu" classNames="my-3" onClick={() => {}} />
        </SidebarTrigger>

        <Sidebar>
          <SidebarHeader>
            <div className="d-flex flex-column justify-content-center align-items-center text-secondary mt-4 mb-3">
              <ProfileIcon />
              <div className="mt-1">Tony Stark</div>
            </div>
          </SidebarHeader>
          <SidebarMenuItems>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<UserIcon />}>Users</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ContactsIcon />}>Contacts</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ClientsIcon />}>Clients</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<SitesIcon />}>Sites</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<WorkersIcon />}>Workers</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<SuppliersIcon />}>Suppliers</SidebarMenuItem>
          </SidebarMenuItems>
          <SidebarFooter>
            <div>&copy; BM e-Solutions</div>
          </SidebarFooter>
        </Sidebar>
      </>
    );
  },
};
