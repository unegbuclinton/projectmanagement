import { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants/colors';
const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: inherit;
        background: ${COLORS['smoky-black']};
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
    }
    ::-webkit-scrollbar {
       display: none;
    }
    ::-webkit-scrollbar-track {
    }
`;

export default GlobalStyle;
