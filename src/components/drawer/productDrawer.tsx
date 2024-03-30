import { DrawerContainer } from './drawer.styled';
import { LeftOutlined } from '@ant-design/icons';
interface Props {
  title?: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

export default function ProductDrawer({ title, isOpen, children, onClose }: Props) {
  return (
    <DrawerContainer
      closeIcon={<LeftOutlined />}
      style={{}}
      title={title}
      width={520}
      onClose={onClose}
      open={isOpen}
    >
      {children}
    </DrawerContainer>
  );
}
