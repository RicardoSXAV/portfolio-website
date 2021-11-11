import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100vw;
        height: 100vh;

        background: linear-gradient(180deg, #75E6DA 0%, #189AB4 100%);
    }
    *, button, input {
        font-family: 'Nunito', sans-serif;
        border: 0;
        outline: 0;
    }
`;
