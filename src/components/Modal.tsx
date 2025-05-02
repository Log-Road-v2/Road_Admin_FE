import styled from "@emotion/styled";
import Font from "../styles/Font";
import Color from "../styles/Color";
import { Cancel } from "../assets/Cancel";
import RoundButton from "./Common/Button/RoundButton";


interface PropsType {
   title?: string;
   subTitle?: string;
   text?: string;
   children: React.ReactNode;
   isOpen: boolean;
   onClose?: () => void;
}

const Modal = ({ title, subTitle, text, children, isOpen, onClose }: PropsType) => {

   if (isOpen) {
      document.body.style.overflow = 'hidden';
   } else {
      document.body.style.overflow = 'auto';
   }

   return (
      <>
         <Background isOpen={isOpen}>
            <ModalContainer>
               <CancelWrapper>
                  <Cancel onClick={onClose}/>
               </CancelWrapper>
               <div>
                  <Title>{title}</Title>
                  <SubTitle>{subTitle}</SubTitle>
               </div>
               <Line />
               {children}
               <RoundButton text={text} variant="full"></RoundButton>
            </ModalContainer>
         </Background>
      </>
   )
}

const Background = styled.div<{ isOpen: boolean }>`
   position: fixed;
   z-index: 999;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.4);
   display: ${props => props.isOpen ? 'flex' : 'none'};
   align-items: center;
   justify-content: center;
`

const ModalContainer = styled.div`
   width: 380px;
   padding: 16px 24px;
   background-color: ${Color.white};
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   gap: 24px;
`

const CancelWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.p`
   font-size: ${Font.semi20};
`

const SubTitle = styled.p`
   font-size: ${Font.medium14};
   color: ${Color.gray300};
`

const Line = styled.hr`
   width: 100%;
   border: 1px solid black;
`


export default Modal;
