import styled from '@emotion/styled';

export const FormContacts = styled.form`
  display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid;
    width: 480px;
    height: 150px;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const Btn = styled.button`
    width: 130px;
    height:20px;
    cursor: pointer;
    background-color: #6363f1ce;
    border:none;
    border-radius: 10px;
    :hover{
        background-color: #2c2c70ce;
    }
`;