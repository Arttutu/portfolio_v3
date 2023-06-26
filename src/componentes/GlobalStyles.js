import { corRoxoClaroUm, corRoxoEscuroDois } from "./UI/variaveis"

const { default: styled, createGlobalStyle } = require("styled-components")

export const GlobalStyles = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

  /* Works on Firefox */
* {
 
  scrollbar-width: thin;
  scrollbar-color:${corRoxoClaroUm};
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: ${corRoxoEscuroDois};
}

*::-webkit-scrollbar-thumb {
  background-color: ${corRoxoEscuroDois};
  border-radius: 20px;
  border: 3px solid ${corRoxoClaroUm};
}


`
