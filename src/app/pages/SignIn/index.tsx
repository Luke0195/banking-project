import React, { useEffect, useState, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { Container, Content, Form } from './styles'
import { UserContext } from '../../hooks/UserContext'

import logo from '../../assets/img/logo.svg'

export function SignIn () {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [hasChange, setHasChange] = useState(false)
  const [sucessedForm, setSucessedForm] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const { handleSaveData } = useContext(UserContext)
  const handleValidateName = useCallback((value: string) => {
    if (value.length >= 3) {
      setIsDisabled(false)
      setHasChange(true)
    } else {
      setIsDisabled(true)
      setHasChange(false)
    }
  }, [text])

  const handleNavigate = () => {
    handleValidateName(text)
    handleSaveData(text)
    setIsConfirmed(true)
    setSucessedForm(true)
    setTimeout(() => {
      navigate('dashboard')
    }, 1000)
    setText('')
    toast.success(`Seja Bem-Vindo ${text}!`)
  }
  useEffect(() => {
    handleValidateName(text)
  }, [text])
  /*
10

var dt = new Date(); // current date of week
var currentWeekDay = dt.getDay();
var lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1;
var wkStart = new Date(new Date(dt).setDate(dt.getDate() - lessDays));
var wkEnd = new Date(new Date(wkStart).setDate(wkStart.getDate() + 6));
*/
  return (
    <Container changeArea={hasChange}>
            <motion.div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

              }}
              animate={{ y: [100, 0] }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
            >
        {isConfirmed
          ? (

          <motion.div
            animate={{ opacity: 0 }}
            transition ={{ ease: 'easeOut', duration: 0.5 }}
          >

        <Content>
            <img src={logo} alt="logo do projeto"/>
            <span> Seja  bem vindo ao estudo de redesign da interface do Banco Inter</span>

            <Form disabled={isDisabled}>
            <input
             type="text"
             value={text}
             placeholder="Digite seu nome para entrar"
             onChange={(e) => setText(e.target.value)}
             />
             <button
              type="button"
              disabled={isDisabled}
              onClick={handleNavigate}
              > Entrar no App</button>
             </Form>
        </Content>
        </motion.div>
            )
          : (
          <Content>
          <img src={logo} alt="logo do projeto"/>
          <span> Seja  bem vindo ao estudo de redesign da interface do Banco Inter</span>

          <Form disabled={isDisabled} changeArea={sucessedForm}>
          <input
           type="text"
           value={text}
           placeholder="Digite seu nome para entrar"
           onChange={(e) => setText(e.target.value)}
           />
           <button
            type="button"
            disabled={isDisabled}
            onClick={handleNavigate}
            > Entrar no App</button>
           </Form>
      </Content>
            )}
            </motion.div>

    </Container>
  )
}
