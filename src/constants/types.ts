// navbar types
export interface NavItemProps {
  item: string;
  onClick?: () => void;
  isMobile: boolean;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
