import styled, { createGlobalStyle } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const Keyboard = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.price {
      color: ${(props) => props.theme.hamza};
    }
  }
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
