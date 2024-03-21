import { DrawerContainer } from './drawer.styled';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export default function ProductDrawer({ isOpen, children, onClose }: Props) {
  return (
    <DrawerContainer closable={false} onClose={onClose} open={isOpen}>
      {children}
    </DrawerContainer>
  );
}
