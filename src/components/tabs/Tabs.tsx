import { TabsProps } from 'antd';
import { TabsAntd } from './tabs.style';

export default function Tabs() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Combos',
    },
    {
      key: '2',
      label: 'Salgados',
    },
    {
      key: '3',
      label: 'Congelados',
    },
  ];

  return <TabsAntd defaultActiveKey="1" items={items} onChange={onChange} />;
}
