import './App.css';
import Account from './components/account/Account';

import Screen from './components/screen/Screen';

import CategoryItens from './components/categoryItens/categoryItens';
import { FloatButton } from 'antd';

function App() {
  return (
    <Screen>
      <Account />
      <CategoryItens />
      <FloatButton.BackTop />
    </Screen>
  );
}

export default App;
