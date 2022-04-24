import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 50px 1em;
    background-color: #eaeff1;

    hr {
        width: 60px;
        height: 2px;
        background-color: ${props => props.theme.green1};
        margin: 1em auto;
    }

    h2 {
        text-align: center;
        font-family: 'roboto',sans-serif !important;
        font-weight: 300;
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    h3 {
        text-align: center;
        font-family: 'roboto',sans-serif !important;
        font-weight: 300;
        font-size: 1em;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em auto;
    margin-bottom: 2em;
    max-width: 1600px;

    @media only screen and (min-width: 768px){
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin: 1em;

    svg {
        color: ${props => props.theme.green1};
        font-size: 4em;
    }

    h4 {
        text-align: center;
        font-family: 'roboto',sans-serif !important;
        font-weight: 500;
        font-size: 1em;
        margin: 1em;
    }

    .description {
        text-align: center;
        width: 100%;
        font-weight: 300;
        height: 100%;
    }
`