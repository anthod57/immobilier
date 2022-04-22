import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10;
    background-color: #ffffffe6;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 500px;
    height: 600px;
    background-color: ${props => props.theme.white};
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3em 100px;
    position: relative;

    .close {
        top: 1em;
        right: 1em;
        font-size: 1.2em;
        position: absolute;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px){

    }
`

export const FormsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .header {
        display: flex;

        button {
            border-radius: 0px;
            background-color: transparent;
            color: black;

            &:active {
                transition: none;
            }

            &:hover {
                transition: none;
            }
        }

        .active {
            border-bottom: 3px solid ${props => props.theme.green2};
        }
    }
`

export const Form = styled.div`
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    margin-top: 1em;
`