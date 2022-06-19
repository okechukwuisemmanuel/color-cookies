import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --primary-clr:blue;
 --secondary-clr:#2f2e41 ;
 --shadow2-clr:#ccc;
 --shadow-clr:#eee;
 --shadow1-clr:#ddd;
 --dark-clr:#222;
 --light-clr:#fff;
 --light2-clr:#f9f9f9;
}

*,
:where(*, ::after, ::before) {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

html:focus-within {
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background-color: transparent;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

img,
picture,
svg {
  max-width: 100%;
  aspect-ratio: 1;
  width: 100%;
}

form,
input,
label,
button,
textarea {
  font: inherit;
}

li:not([type="list"]) {
  list-style-type: none;
}

a:not([class="underline"]) {
  text-decoration: none;
}

main {
  margin-block-start: 1em;
  scroll-margin-block-start: 1em;
}


section{
    &:not(:last-child) {
    margin-block-end: 1em;
  }
}
div.active{
  display: block;
}
div.none{
  display: none;
}

`;
export default GlobalStyle;
