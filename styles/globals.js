import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family:'Kanit';
}

html,body,#__next {
  width: 100vw;
  height: 100vh;
}

a{
  text-decoration: none;
  cursor: pointer;
}
` 


