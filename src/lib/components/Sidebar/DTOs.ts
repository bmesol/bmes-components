interface SidebarProps {
  id: string;
  children: React.ReactNode;
}

interface SidebarChildProps {
  children: React.ReactNode;
}

interface SidebarTriggerProps {
  sidebarId: string;
  children: React.ReactNode;
}

interface SidebarMenuItemProps {
  href: string;
  target?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export { SidebarProps, SidebarChildProps, SidebarTriggerProps, SidebarMenuItemProps };