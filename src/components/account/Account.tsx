import { Divider } from "antd";
import { AccountContainer, AccountDetails, AccountName, CardImage,GroupDetails,OpenClose } from "./account.styled";

export default function Account(){

    return(
        <AccountContainer>
        <CardImage preview={false} width={150} height={150} src="./logo.png" />
        <AccountDetails>
        <AccountName>Croq Salgados</AccountName>
        <GroupDetails>
        <OpenClose style={{color: "#87d068"}}>Aberto</OpenClose>
        <Divider  type="vertical" />
        <p>Frete Gratis</p>
        </GroupDetails>
   
    
        </AccountDetails>
        </AccountContainer>
    )
}