import styled from "styled-components";

const LIST = styled.ol`
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.336);

  & li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
  }

  & textarea {
    border: transparent;
    text-align: center;
    text-transform: uppercase;
    outline: none;
    background: transparent;
    color: #fff;
  }

  & button:hover{
      cursor: pointer;
  }
`;

export default LIST;
