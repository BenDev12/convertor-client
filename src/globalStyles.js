/* eslint-disable prettier/prettier */
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html,
body {
  padding: 0;
  margin: 0;
  background-color: rgba(211, 211, 211, 0.201);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color:black;
}

h1 {
  margin-bottom: 0.7em;
  font-size: 3em;
  font-weight: 800;
  text-align: center;
}

a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.705);
  font-weight: 600;
  transition: 0.5s ease;
  
}
a:hover {
  color: rgba(43, 149, 236, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
h1,h2,h3,h4,h5 {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

p {
  width: auto;
  margin: 0 auto 1em;
  line-height: 1.7;
  font-weight: 300;
}

`
