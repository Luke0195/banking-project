import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
        <motion.div
        animate={{ x: 30 }}
        transition={{ type: 'spring', stiffness: 50 }}
        >

        <LeftContent>
          <img src={logo} alt="inter"/>
          <span> Internet Banking </span>
        </LeftContent>
        </motion.div>
        <RightContent>
          <motion.div
          animate={{ opacity: 0.6 }}
          transition={{ type: 'spring', stiffness: 50 }}>
              <button className="simulador"> Simulador de Renda Fixa</button>
          </motion.div>
          <motion.div
          animate={{ x: -10 }}
          transition={{ type: 'spring', stiffness: 100 }}>
          <button className="name">
            <span> {initial}</span>
         </button>
         </motion.div>
        </RightContent>
      </Content>
    </Container>

  )
}
