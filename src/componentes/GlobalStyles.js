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
  
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {

};


*::-webkit-scrollbar-thumb {

  border-radius: 20px;

}


`
