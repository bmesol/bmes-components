import {
  ChevronDownIcon,
  ClientsIcon,
  CloseIcon,
  ContactsIcon,
  EditIcon,
  InfoIcon,
  LocationIcon,
  MailIcon,
  MenuIcon,
  MobileIcon,
  PhoneIcon,
  SearchIcon,
  SitesIcon,
  SuppliersIcon,
  TickIcon,
  TrashIcon,
  UsersIcon,
  WorkerIcon,
  ChevronUpDownIcon,
  PanIcon,
  AadhaarIcon,
  GstIcon,
  BankAccountIcon,
  PhonePeIcon,
  GpayIcon,
  UpiIcon,
  ClockIcon,
  AsteriskIcon,
  WorkersIcon,
} from "../../lib";
import React from "react";
import { Meta } from "@storybook/react";
import { IconProps } from "../../lib/components/Icons/DTOs";

const meta: Meta = {
  title: "Icons/Icons",
  component: ClientsIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const IconTemplate = (IconComponent: React.ComponentType<IconProps>) => (args: IconProps) => <IconComponent {...args} />;

export const ChevronDown = IconTemplate(ChevronDownIcon);
export const Clients = IconTemplate(ClientsIcon);
export const Close = IconTemplate(CloseIcon);
export const Contacts = IconTemplate(ContactsIcon);
export const Edit = IconTemplate(EditIcon);
export const Info = IconTemplate(InfoIcon);
export const Location = IconTemplate(LocationIcon);
export const Mail = IconTemplate(MailIcon);
export const Menu = IconTemplate(MenuIcon);
export const Mobile = IconTemplate(MobileIcon);
export const Phone = IconTemplate(PhoneIcon);
export const Search = IconTemplate(SearchIcon);
export const Sites = IconTemplate(SitesIcon);
export const Suppliers = IconTemplate(SuppliersIcon);
export const Tick = IconTemplate(TickIcon);
export const Trash = IconTemplate(TrashIcon);
export const Users = IconTemplate(UsersIcon);
export const Worker = IconTemplate(WorkerIcon);
export const ChevronUpDown = IconTemplate(ChevronUpDownIcon);
export const Pan = IconTemplate(PanIcon);
export const Aadhaar = IconTemplate(AadhaarIcon);
export const Gst = IconTemplate(GstIcon);
export const BankAccount = IconTemplate(BankAccountIcon);
export const PhonePe = IconTemplate(PhonePeIcon);
export const Gpay = IconTemplate(GpayIcon);
export const Upi = IconTemplate(UpiIcon);
export const Clock = IconTemplate(ClockIcon);
export const Asterisk = IconTemplate(AsteriskIcon);
export const Workers = IconTemplate(WorkersIcon);
