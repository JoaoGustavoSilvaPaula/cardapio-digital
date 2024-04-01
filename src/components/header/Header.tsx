import { Modal } from 'antd';
import { useState } from 'react';
import {
  HeaderContainer,
  MyHeader,
  LogoExit,
  SearchBar,
  SearchInput,
  User,
  HeaderActions,
  ShoppingCart,
  CountItems,
  CartButton,
} from './header.style';
import { useCartStore } from '../../stores/cartStore';

const { Search } = SearchInput;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [itensCount] = useCartStore((state) => [state.itensCount]);
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Atenção"
        open={open}
        onOk={() => {}}
        onCancel={hideModal}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
      <MyHeader>
        <HeaderContainer>
          <SearchBar>
            <Search size="large" placeholder="Busque por itens"></Search>
          </SearchBar>
          <HeaderActions>
            <CartButton>
              <CountItems>{itensCount}</CountItems>
              <ShoppingCart />
            </CartButton>

            <User />
            <LogoExit onClick={showModal}>Sair</LogoExit>
          </HeaderActions>
        </HeaderContainer>
      </MyHeader>
    </>
  );
}
