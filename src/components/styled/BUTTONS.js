import styled from "styled-components";

const SUBMIT = styled.button`
  padding: 10px 15px;
  color: #fff;
  background-color: rgba(252, 70, 107, 1);
  border: 0px;
  opacity: 0.8;
`;

const REMOVE = styled.button`
  padding: 10px 15px;
  color: #fff;
  background-color: rgba(63, 94, 251, 1);
  border: 0px;
  opacity: 0.8;

  & :hover{
      cursor: pointer;
  }
`;

const MOVE = styled.button`
padding: 10px 15px;
color: #fff;
background-color: rgba(63, 94, 251, 1);
border: 0px;
opacity: 0.8;

`;
export { SUBMIT, REMOVE, MOVE };
