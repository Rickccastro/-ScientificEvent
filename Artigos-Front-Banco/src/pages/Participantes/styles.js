import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  form{
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

form > textarea{
  border: none;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
}


`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 22px;


  > nav {
    display: flex;
    gap: 16px;

    > button {
      width: 150px;
    }
  }
`;


export const Item = styled.button`
   display: flex;
   flex-direction: column;
   border: none;
   gap: 5px;
   width: 100%;
   padding: 32px 16px;
   background-color: ${({ theme }) => theme.COLORS.GRAY_800};
   color: ${({ theme }) => theme.COLORS.WHITE};
   border-radius: 5px;
   margin-bottom: 16px;

   &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
   }
`;
