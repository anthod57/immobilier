import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    width: 100%;

    .background {
        position: absolute;
        height: 100vh;
        width: 100%;
        filter: brightness(0.75);
    }
`

export const Wrapper = styled.div`
    color: white;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 80px;
`;

export const Form = styled.div`
    padding: 1em;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .react-select {
        flex-grow: 1;
        width: 100%;
        text-align: left;
        max-width: 100%;
        margin-bottom: 0.5em;
        max-width: 500px;
        z-index: 5;
    }

    .react-select__control {
        border: none;
        border-bottom: 1px solid #00000040;
        height: 100%;
    }

    .react-select__control--is-focused {
        border: none;
        box-shadow: none;
    }

    .react-select__menu {
        margin: 0;
        border-radius: 0;
    }

    .input-text {
        margin: 0;
        margin-bottom: 0.5em;
    }

    textarea {
        padding: 0.5em;
        resize: none;
    }

    .row {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 500px;
        margin-bottom: 0.5em;

        span {
            display: flex;
            position: relative;
            width: 100%;
            height: 38px;

            &:first-child {
                margin-right: 3px;
            }

            &:last-child {
                margin-left: 3px;
            }
        }

        .surface {
            &:before{
                content: "m²";
                display: flex;
                height: 100%;
                align-items: center;
                right: 30px;
                position: absolute;
                color: #00000080;
                z-index: 1;
            }
        }

        .price {
            &:before{
                content: "€";
                display: flex;
                height: 100%;
                align-items: center;
                right: 30px;
                position: absolute;
                color: #00000080;
                z-index: 1;
            }
        }
    }

    @media only screen and (min-width: 768px){
        max-width: 500px;
    }
`