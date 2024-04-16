import React from "react";
import {
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarMenuItems,
  SidebarMenuItem,
  SidebarFooter,
  SuppliersIcon,
  ContactsIcon,
  ClientsIcon,
  WorkerIcon,
  Button,
  ButtonVariants,
  ProfileImage,
  UsersIcon,
  SitesIcon,
} from "../../lib";

const meta = {
  title: "Components/Sidebar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const SampleSidebar = {
  render: () => {
    return (
      <>
        <SidebarTrigger sidebarId="menu">
          <Button variant={ButtonVariants.PRIMARY} label="Open" onClick={() => {}} />
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
