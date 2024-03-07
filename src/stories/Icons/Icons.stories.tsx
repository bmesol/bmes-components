import { SuppliersIcon } from "../../lib/components/Icons/SuppliersIcon/SuppliersIcon";
import { ContactsIcon } from "../../lib/components/Icons/ContactsIcon/ContactsIcon";
import { ClientsIcon } from "../../lib/components/Icons/ClientsIcon/ClientsIcon";
import { WorkerIcon } from "../../lib/components/Icons/WorkerIcon/WorkersIcon";
import { CloseIcon } from "../../lib/components/Icons/CloseIcon/CloseIcon";
import { SitesIcon } from "../../lib/components/Icons/SitesIcon/SitesIcon";
import { UsersIcon } from "../../lib/components/Icons/UsersIcon/UsersIcon";
import { MenuIcon } from "../../lib/components/Icons/MenuIcon/MenuIcon";
import { EditIcon } from "../../lib/components/Icons/EditIcon/EditIcon";
import { ToastProvider } from "./../../lib/components/Toast/Toast";
import { Icon } from "./Icon";
import React from "react";

const meta = {
  title: "Icons/Icons",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Clients = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<ClientsIcon />} name="ClientsIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Contacts = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<ContactsIcon />} name="ContactsIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Worker = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<WorkerIcon />} name="WorkerIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Close = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<CloseIcon />} name="CloseIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Sites = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<SitesIcon />} name="SitesIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Suppliers = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<SuppliersIcon />} name="SuppliersIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Users = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<UsersIcon />} name="UsersIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Menu = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<MenuIcon />} name="MenuIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};

export const Edit = {
  render: (children: React.ReactElement) => {
    const App = () => {
      return <Icon src={<EditIcon />} name="EditIcon" />;
    };
    return (
      <ToastProvider>
        <App />
      </ToastProvider>
    );
  },
};
