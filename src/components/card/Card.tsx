import { CardContainer, CardContent, CardDescription, CardImage, CardTitle } from './card.style';

export interface CardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function Card(cardProps: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <div>
          <CardTitle>{cardProps.title}</CardTitle>
          <CardDescription>{cardProps.description}</CardDescription>
          <h3>{cardProps.price}</h3>
        </div>
        <div>
          <CardImage width={112} height={112} preview={false} src={cardProps.imageUrl} />
        </div>
      </CardContent>
    </CardContainer> 
  );
}
