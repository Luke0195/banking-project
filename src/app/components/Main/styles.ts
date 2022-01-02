import styled from 'styled-components'

export const Container = styled.div`
width:100%;
`

interface HeaderProps{
  done: number
}
export const Header = styled.div<HeaderProps>`
width:${(props) => props.done}%;
height:60px;
background: ${({ theme }) => theme.colors.secondary};

`
