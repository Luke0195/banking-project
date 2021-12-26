import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ContainerProps{
  changeArea: boolean
}

export const Container = styled.div<ContainerProps>`
 width:100%;
 height:100%;
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 background-color:#f5f5f5;
 transition: all 2s ease-out;
 ${(props) => props.changeArea && css`
  background-color: ${({ theme }) => theme.colors.primary};

 `}


`

export const Content = styled.div`
 width:100%;
 max-width:380px;
 padding:20px 16px;
 background-color:${({ theme }) => theme.colors.background};
 border-radius:8px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;

  img{
    width:100px;
    height:40px;
  }

  span{
   display:inline-block;
   width:100%;
   max-width:300px;
   font-size:16px;
   color:${({ theme }) => theme.colors.grey};
   margin:0;
   padding:0;
   text-align:center;
   margin: 8px 0;
 }
`

interface ButtonProps {
  disabled: boolean
}

export const Form = styled.form<ButtonProps>`
 width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin: 8px 0;

 input {
   width:100%;
   max-width:300px;
   height:45px;
   padding:0 8px;
   color:rgb(108, 117, 125);
   background: rgba(140, 145, 165, 0.08);
   border:0;
   border-radius:5px;

 }

 button{
   width:100%;
   display:inline-block;
   margin: 10px 0;
   max-width:300px;
   height:45px;
   background:linear-gradient(
90deg, rgb(255, 80, 15) 0%, rgb(255, 135, 0) 70%);
    color:#fff;
    border:0;
    border-radius:5px;
    transition: all 0.8s ease-out;
    &:hover{
      filter:brightness(95%);
    }

    ${(props) => props.disabled && css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

 }

`
