import { Sidebar, SidebarTrigger, SidebarHeader, SidebarMenuItems, SidebarMenuItem, SidebarFooter } from "../../lib/components/Sidebar/Sidebar";
import { SuppliersIcon } from "../../lib/components/Icons/SuppliersIcon/SuppliersIcon";
import { ContactsIcon } from "../../lib/components/Icons/ContactsIcon/ContactsIcon";
import { ClientsIcon } from "../../lib/components/Icons/ClientsIcon/ClientsIcon";
import { WorkerIcon } from "../../lib/components/Icons/WorkerIcon/WorkersIcon";
import { Button, ButtonVariants } from "./../../lib/components/Button/Button";
import { UsersIcon } from "../../lib/components/Icons/UsersIcon/UsersIcon";
import { SitesIcon } from "../../lib/components/Icons/SitesIcon/SitesIcon";
import React from "react";
import { ProfileImage } from "../../lib/components/ProfileImage/ProfileImage";

const meta = {
  title: "Components/Sidebar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Menu = {
  render: (children: React.ReactElement) => {
    return (
      <>
        <SidebarTrigger sidebarId="menu">
          <Button variant={ButtonVariants.SUCCESS} label="Open Menu" classNames="my-3" onClick={() => {}} />
        </SidebarTrigger>

        <Sidebar id="menu">
          <SidebarHeader>
            <div className="d-flex flex-column justify-content-center align-items-center text-secondary mt-4 mb-3">
              <ProfileImage alt="Tony stark"/>
              <div className="mt-3">Tony stark</div>
            </div>
          </SidebarHeader>
          <SidebarMenuItems>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<UsersIcon />}>Users</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ContactsIcon />}>Contacts</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ClientsIcon />}>Clients</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<SitesIcon />}>Sites</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<WorkerIcon />}>Workers</SidebarMenuItem>
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
