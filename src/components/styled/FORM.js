import styled from 'styled-components';

const FORM = styled.form`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    color: #fff;
    
    & input{
        width: 60%;
        padding:10px 15px;
        outline: none;
        border: transparent;
        border-bottom: 1px solid #333;
        background: transparent;
        text-transform: uppercase;
        color: #fff;
    }

    & input::placeholder{
        color: #fff;
    }

    & button:hover{
        cursor: pointer;
        opacity: 1;
    }

`

export default FORM;