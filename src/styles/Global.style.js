import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-blue: #102A42;
        --light-blue: #617d98;
        --light-white: #f1f5f8;
        --light-dark-white: #d2d2d2;
        --main-color: #49A6E9;
        --main-light-color: #49a6e91c;
        --red-dark: #ad0f04;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        background-color: var(--light-white);
    }

    h1, h2, h3, h4 {
        color: var(--dark-blue);
    }

    img {
        max-height: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyle;
