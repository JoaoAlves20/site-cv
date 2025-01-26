import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Exo", serif;
    }

    body {
        background-color: #222;
    }

    .modal {
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 20px;
        padding: 20px;
        margin: 30px;
        height: 300px;
        display: flex;

        .container-description {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            height: 100%;
            width: 100vw;
        }

        .description {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 50px;
            max-width: 80vw;
        }

        button {
            border: none;
            border-radius: 5px;
            width: 50px;
            height: 30px;
            font-size: 30px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #de0b07;
            color: #fff;
            cursor: pointer;
        }
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
`