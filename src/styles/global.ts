import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Droid Sans, Helvetica Neue, sans-serif;
            background-color: white;
            color: black;
    }

    body {
      height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;
