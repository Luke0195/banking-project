import styled from 'styled-components'

export const Container = styled.div`
 width:100%;
 height:100px;
 border: 1px solid rgba(0,0, 0,0.1);
 padding: 16px;
 display:flex;
 flex-direction:row;
 align-items:center;

`
export const Content = styled.div`
 width:100%;
 max-width:1200px;
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;

 margin: auto;
`

export const LeftContent = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;

 img{
   width:100px;
   height:30px;
 }

 span{
   display:inline-block;
   margin-top:4px;
   font-size:13px;
   color:#ccc;
   font-weight:bold;
 }
`

export const RightContent = styled.div`
width: 300px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;


.simulador{
  width: 220px;
  height:42px;
  color:${({ theme }) => theme.colors.primary};
  background-color:${({ theme }) => theme.colors.background};
  border:1px solid ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
  border-radius:4px;
  transition: all 1s ease-out;

  &:hover{
    color:${({ theme }) => theme.colors.label};
    background-color:${({ theme }) => theme.colors.secondary};

  }
}

.name{
  width:42px;
  height:42px;
  text-transform:uppercase;
  font-size:20px;
  color:${({ theme }) => theme.colors.secondary};
  border-radius:50%;
  border:1px solid transparent;

}

`
