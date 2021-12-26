import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  outline:0;
  box-sizing:border-box;
  font-family:'Lato'
}

html, body, #root{
  height:100%;
}



h1, h2, h3, h4, h5, h6{
  font-size:30px;
  line-height:40px;
}

body, input, button{
  font-size:16px;
}

button{
  cursor:pointer;
}
a{
  text-decoration:none;
}
`
