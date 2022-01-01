import React, { useState } from 'react'
import logo from '../../assets/img/logo.svg'
import { Container, LeftContent, RightContent, Content } from './styles'

export function Header () {
  const [data, setData] = useState(() => {
    const userName = localStorage.getItem('@item')
    if (userName) {
      return userName
    }
    return ''
  })

  const initial = data.slice(0, 2)
  return (
    <Container>
      <Content>
        <LeftContent>
          <img src={logo} alt="inter"/>
          <span> Internet Banking </span>
        </LeftContent>
        <RightContent>
          <button className="simulador"> Simulador de Render Fixa</button>
          <button className="name">
            <span> {initial}</span>
         </button>
        </RightContent>
      </Content>
    </Container>

  )
}
