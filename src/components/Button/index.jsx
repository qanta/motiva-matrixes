import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.$primary};
  color: ${({ theme }) => theme.$white};
  border-radius: 30px;
  padding: 10px 15px;
  font-size: 1.2em;
  border: 0px;
`;
