import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BRAND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  > input {
    height: 46px;
    width: 100%;
    padding: 12px;
    padding-left: 7px;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
    &::placeholder,svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > svg {
    margin-left: 12px;
  }
`;