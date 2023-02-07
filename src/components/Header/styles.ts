import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 4.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  input {
    width: 100%;
    background: #FFF;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
