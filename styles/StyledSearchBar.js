import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: #00000080;
    border-radius: 10px;
    height: auto;
    padding: 0 1em;
    padding-bottom: 1em;

    .row {
        margin: 1em 0;
        .react-select {
            margin-top: 5px;
        }
    }

    @media only screen and (min-width: 1160px){
        display: flex;
        align-items: center;
        padding: 0;
        max-width: unset;
        width: auto;
        padding-right: 1em;

        .row {
            min-width: 150px;
            width: 100%;
            margin: 1em;
        }

        button {
            margin: 0;
            min-width: 150px;
        }
    }
`