import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, #root {
  width: 100%;
  height: 100%;
}

iframe {
  display: none;
}

body {
  overflow-x: hidden;
  font-family: "sdMe", "Apple SD Gothic Neo", "Malgun Gothic", "arial sans-serif";

  &.open-modal {
    overflow-y: hidden;
  }
}

button {
  cursor: pointer;
}

* {
  padding: 0px;
  margin: 0px;
}
.main-background-color {
  background-color: rgb(245, 245, 245);
}
.out-shadow-extra-strong{
  box-shadow: 0 15px 14px 3px lightgrey !important;
  transition: all 0.15s;
}
.out-shadow-strong{
  box-shadow: 0 11px 10px 2px lightgrey !important;
  transition: all 0.15s;
}
.out-shadow-middle{
  box-shadow: 0 6px 5px 2px lightgrey !important; 
  transition: all 0.15s;
}
.out-shadow-weak{
  box-shadow: 0px 3px 1.5px lightgrey !important;
}
.in-shadow-middle{
  box-shadow: inset 0 6px 5px 2px lightgrey !important; 
  background-color: white;
  transition: all 0.1s;
}
.in-shadow-weak{
  box-shadow: inset 0px 3px 1.5px lightgrey !important;
  background-color: white;
  transition: all 0.1s;
}
// bottom에만 border radius
.border-radius-bottom-strong{
  border-bottom-right-radius: 67px;
border-bottom-left-radius: 67px;
}
.border-radius-bottom{
  border-bottom-right-radius: 30px;
border-bottom-left-radius: 30px;
}
// 각 모서리 전부 border radius
.border-radius-all-half{
  border-radius : 50%
}
.border-radius-all{
  border-radius : 30px
}
`;

export default GlobalStyle;
