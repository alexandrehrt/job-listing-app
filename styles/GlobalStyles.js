import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  font-size: 62,5%;
}

body {
  background-color: hsl(180, 52%, 96%);
}

a {
  color: inherit;
  text-decoration: none;
}
`