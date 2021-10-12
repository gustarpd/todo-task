import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #555;
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  align-items: center;

  .image {
    cursor: pointer;
    margin-right: 5px;
  }

  input {
    outline: 0;
    border: 0;
    color: #FFF;
    font-size: 18px;
    flex: 1;
    background: transparent;
  }
`;
