import React, { useState, useCallback, useEffect } from 'react'
import { Container, Header } from './styles'

export function Main () {
  const [count, setCount] = useState(0)

  setTimeout(() => {
    setCount((prevState) => prevState + 1)
  }, 0)

  return (
    <Container>
      <Header done={count}/>
    </Container>
  )
}
