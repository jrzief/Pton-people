import styled, { css } from "styled-components";

export const ProfileImage = styled.div`
  width: 200px;
  height: 250px;
  background: no-repeat center/170% url(/img/9.jpeg);
  border-radius: 100px;
  margin: 40px;
  @media (max-width: 990px) {
    margin: 20px;
    width: 120px;
    height: 120px;
  }
  ${({ mini }) =>
    mini &&
    css`
      width: 50px;
      height: 50px;
      margin: 5px;
      @media (max-width: 990px) {
        margin: 5px;
        width: 30px;
        height: 50px;
      }
    `};
`;
