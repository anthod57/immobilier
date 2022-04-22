import styled from "styled-components";

export const Container = styled.section`
    background-color: ${props => props.theme.white};
    color: ${props => props.bg ? props.theme.white : ""};
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${props => props.bg ? `url(${props.bg})` : ""};

    @media only screen and (min-width: 768px){
        margin-top: 100px;
        min-height: 500px;
    }
`

export const Wrapper = styled.div`
    margin: auto;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: 2em;
        text-shadow: 0 0 5px #696969;
        margin-bottom: 0.5em;
    }

    @media only screen and (min-width: 768px){
        min-height: 500px;
    }
`