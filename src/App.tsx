import './App.css';
import Account from './components/account/Account';

import Screen from './components/screen/Screen';

import CategoryItens from './components/categoryItens/categoryItens';

function App() {
  return (
    <Screen>
      <Account />
      <CategoryItens />
    </Screen>
  );
}

export default App;
