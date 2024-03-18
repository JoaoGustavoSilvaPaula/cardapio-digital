import Header from '../header/Header';
import { ImageTop, ScreenContainer, ScreenContent, ScreenLayout } from './screen.style';
import { Footer } from 'antd/es/layout/layout';

interface ScreenProps {
  children: React.ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return (
    <ScreenLayout>
      <Header />
      <ScreenContainer>
        <ImageTop
          preview={false}
          src="https://static-images.ifood.com.br/image/upload/t_banner/capa/86478110-e8f1-4c09-91ee-3d8b8e2a2dde/202305232209_WUj4_i.jpg"
        />
        <ScreenContent>{children}</ScreenContent>
        <Footer style={{ textAlign: 'center', height: '32px', padding: '5px' }}>
          Index Sistemas ©{new Date().getFullYear()}
        </Footer>
      </ScreenContainer>
    </ScreenLayout>
  );
}
