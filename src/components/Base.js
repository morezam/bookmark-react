import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        padding: 0;
        margin:0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        @media (max-width: 900px){
            font-size: 50%;
        }
        @media (max-width: 500px){
            font-size: 45%;
        }
    }

    body{
        font-size: 1.8rem;
        font-family: 'Rubik', sans-serif;
        box-sizing: border-box;
    }

    :root{
        --color-primary: #5368DF;
        --color-secondary: #FA5757;
        --color-primary-dark: #252B46;
        --color-text: #9194A1;
    }
`;

export default GlobalStyle;
