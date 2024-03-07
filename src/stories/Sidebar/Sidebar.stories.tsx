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
        <SidebarTrigger sidebarId="menu">
          <Button variant={ButtonVariants.SUCCESS} label="Open Menu" classNames="my-3" onClick={() => {}} />
        </SidebarTrigger>

        <Sidebar id="menu">
          <SidebarHeader>
            <div className="d-flex flex-column justify-content-center align-items-center text-secondary mt-4 mb-3">
              <ProfileImage alt="Tony stark"/>
            </div>
          </SidebarHeader>
          <SidebarMenuItems>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<UsersIcon color="#4F430F" />}>Users</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ContactsIcon color="#4F430F" />}>Contacts</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<ClientsIcon color="#4F430F"/>}>Clients</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<SitesIcon color="#4F430F" />}>Sites</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<WorkerIcon color="#4F430F" />}>Workers</SidebarMenuItem>
            <SidebarMenuItem href={"https://www.bmesolutions.in/"} icon={<SuppliersIcon color="#4F430F" />}>Suppliers</SidebarMenuItem>
          </SidebarMenuItems>
          <SidebarFooter>
            <div>&copy; BM e-Solutions</div>
          </SidebarFooter>
        </Sidebar>
      </>
    );
  },
};
