import {
  ComplementGroupContainer,
  ComplementGroupName,
  ComplementGroupRow,
  ComplementGroupCount,
  ComplementGroupRequired,
} from './complementGroup.styled';
import { ComplementGroupType } from '../../types/complementGroupType';
import { useProductStore } from '../../stores/productStore';
import Complement from '../complement/complement';
import { CheckOutlined } from '@ant-design/icons';

interface complementGroupProps {
  complementGroup: ComplementGroupType;
}

export default function ComplementGroup({ complementGroup }: complementGroupProps) {
  const [countSelectedComplement] = useProductStore((state) => [state.countSelectedComplement]);

  return (
    <div>
      <ComplementGroupContainer>
        <ComplementGroupName>{complementGroup.complementGroup.name}</ComplementGroupName>
        <ComplementGroupRow>
          <ComplementGroupCount>
            {countSelectedComplement + ' de ' + complementGroup.complementGroup.max}
          </ComplementGroupCount>
          {countSelectedComplement < complementGroup.complementGroup.min ? (
            <ComplementGroupRequired color="#3E3E3E">Obrigatório</ComplementGroupRequired>
          ) : (
            <CheckOutlined style={{ fontSize: '20px', marginRight: '10px', color: 'green' }} />
          )}
        </ComplementGroupRow>
      </ComplementGroupContainer>
      {complementGroup.complementGroup.complements.map((complement) => {
        return (
          <Complement
            key={complement.id}
            complement={complement}
            max={complementGroup.complementGroup.max}
          />
        );
      })}
    </div>
  );
}
