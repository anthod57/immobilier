import { createGlobalStyle } from "styled-components";

export const Theme = {
    white: "#f9f9f9",
    green1: "#4cb8ac",
    green2: "#679436",
    blue1: "#427AA1",
    blue2: "#05668D"
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

    *:focus {
        outline: none;
    }


    html, body {
        background-color: #f9f9f9;
        font-family: 'Roboto', sans-serif;
        color: black;
        font-size: 16px;
        overflow-x: hidden;
    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', cursive;
    }

    a, a:hover, a:visited, a:active {
        color: inherit;
    }

    main {
        height: 100%;
        width: 100%;
        margin: auto;
        overflow-x: hidden;
        min-height: 100vh;
    }

    section {

    }

    .react-select {
        max-width: 500px;
    }

    .react-select__menu {
        margin: 0;
        border-radius: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        z-index: 5;
        color: black;
    }

    .react-select__menu-list {
        margin: 0;
        padding: 0;
        border-radius: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: black;
    }

    .react-select__option {
        color: black;
        transition: all 0.1s;

        &--is-selected {
            color: white;
            background-color: ${Theme.blue1}
        } 

        &--is-focused {
            background-color: #427aa180;
        }
    }

    .input-text{
        z-index: 0;
        margin-top: 5px;
        font-family: 'Roboto', sans-serif;
        color: hsl(0, 0%, 20%);
        position: relative;
        width: 100%;
        min-height: 38px;
        max-width: 500px;
        align-items: center;
        background-color: hsl(0, 0%, 100%);
        border-color: hsl(0, 0%, 80%);
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        padding: 2px 8px;
        font-size: 1em;

        &:after {
            visibility: hidden;
            white-space: pre;
            grid-area: 1/2;
            font: inherit;
            min-width: 2px;
            border: 0;
            margin: 0;
            outline: 0;
            padding: 0;
        }
    }

    button {
        font-size: 1em;
        padding: 1em 2em;
        border-radius: 5px;
        color: white;
        background-color: ${Theme.green1};
        transition: all 0.2s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 400px;
        text-align: center;
        margin: auto;

        svg {
            min-width: 20px;
            min-height: 20px;
            max-width: 20px;
            max-height: 20px;
            padding-right: 5px;
        }

        &:hover {
            background-color: #56c2b6;
        }

        &:active {
            background-color: #42aea2;
        }
    }
`;