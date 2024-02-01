interface SidebarProps {
  children: React.ReactNode;
}

interface SidebarMenuItemProps {
  href: string;
  target?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export { SidebarProps, SidebarMenuItemProps };