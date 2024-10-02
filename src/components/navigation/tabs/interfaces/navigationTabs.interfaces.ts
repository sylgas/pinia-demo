export interface NavigationTab {
  label: string;
  route: string;
  expandableTabs?: NavigationTab[];
}
