import { AnchorTab } from './anchor.style';
import { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';

type TabPros = {
  list: string[];
};

export default function Anchor({ list }: TabPros) {
  const onChange = (key: string) => {
    console.log(key);
  };

  const itemsTab: AnchorLinkItemProps[] = list.map((item, index) => {
    return {
      key: `${item}-${index}`,
      href: `#${item}-${index}`,
      title: item,
    };
  });

  return <AnchorTab affix={false} direction="horizontal" items={itemsTab} onChange={onChange} />;
}
