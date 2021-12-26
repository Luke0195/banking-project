import React, { useEffect, useState, useCallback } from 'react'
import logo from '../../assets/img/logo.svg'
import { Container, Content, Form } from './styles'

export function SignIn () {
  const [text, setText] = useState('')
  const [hasChange, setHasChange] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleValidateName = useCallback((value: string) => {
    if (value.length >= 3) {
      setIsDisabled(false)
      setHasChange(true)
    } else {
      setIsDisabled(true)
      setHasChange(false)
    }
  }, [text])

  useEffect(() => {
    handleValidateName(text)
  }, [text])

  return (
    <Container changeArea={hasChange}>
        <Content>
            <img src={logo} alt="logo do projeto"/>
            <span> Seja  bem vindo ao estudo de redesign da interface do Banco Inter</span>
            <Form disabled={isDisabled}>
            <input
             type="text"
             value={text}
             placeholder="Informe seu nome para entrar"
             onChange={(e) => setText(e.target.value)}
             />
             <button
              type="button"
              disabled={isDisabled}
             > Entrar no App</button>
             </Form>
        </Content>

    </Container>
  )
}
