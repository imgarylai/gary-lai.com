import { GITHUB } from "@src/lib/constants";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Archives",
    href: "/archives",
  },
];
